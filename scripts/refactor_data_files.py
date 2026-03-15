#!/usr/bin/env python3
"""
Refactor monolithic projects.ts and blog.ts into modular structure.
Extracts individual projects/posts into separate files.
"""

import re
import os
from pathlib import Path

def extract_type_definitions(content: str, start_marker: str, end_marker: str) -> str:
    """Extract type definitions from the file."""
    pattern = f"{re.escape(start_marker)}.*?{re.escape(end_marker)}"
    match = re.search(pattern, content, re.DOTALL)
    return match.group(0) if match else ""

def extract_projects(content: str) -> list[dict]:
    """Extract individual project objects from projects.ts."""
    # Find the projects array
    array_match = re.search(r'export const projects: Project\[\] = \[(.*)\];', content, re.DOTALL)
    if not array_match:
        return []
    
    array_content = array_match.group(1)
    projects = []
    
    # Split by top-level object boundaries (looking for },\n  {)
    # We need to be careful with nested objects
    depth = 0
    current_obj = ""
    
    for char in array_content:
        current_obj += char
        if char == '{':
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0 and current_obj.strip():
                # We've completed a top-level object
                projects.append(current_obj.strip().rstrip(','))
                current_obj = ""
    
    return projects

def extract_blog_posts(content: str) -> list[str]:
    """Extract individual blog post objects from blog.ts."""
    # Find the blogPosts array
    array_match = re.search(r'export const blogPosts: BlogPost\[\] = \[(.*)\];', content, re.DOTALL)
    if not array_match:
        return []
    
    array_content = array_match.group(1)
    posts = []
    
    depth = 0
    current_obj = ""
    in_string = False
    string_char = None
    escape_next = False
    
    for i, char in enumerate(array_content):
        # Handle escape sequences
        if escape_next:
            current_obj += char
            escape_next = False
            continue
            
        if char == '\\':
            current_obj += char
            escape_next = True
            continue
        
        # Track string boundaries
        if char in ('"', "'") and not in_string:
            in_string = True
            string_char = char
        elif char == string_char and in_string:
            in_string = False
            string_char = None
        
        current_obj += char
        
        # Only count braces outside of strings
        if not in_string:
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 0 and current_obj.strip():
                    posts.append(current_obj.strip().rstrip(','))
                    current_obj = ""
    
    return posts

def get_slug_from_object(obj_str: str) -> str:
    """Extract slug from object string."""
    # Try double quotes first
    match = re.search(r'"slug":\s*"([^"]+)"', obj_str)
    if match:
        return match.group(1)
    # Try single quotes
    match = re.search(r"'slug':\s*'([^']+)'", obj_str)
    if match:
        return match.group(1)
    # Try mixed quotes
    match = re.search(r"slug:\s*['\"]([^'\"]+)['\"]", obj_str)
    return match.group(1) if match else "unknown"

def sanitize_filename(slug: str) -> str:
    """Convert slug to valid filename."""
    return slug.replace('/', '-').replace(':', '-')

def slug_to_identifier(slug: str) -> str:
    """Convert slug to valid JavaScript identifier."""
    # Replace hyphens with underscores
    identifier = slug.replace('-', '_').replace('/', '_').replace(':', '_')
    # Prefix with underscore if starts with number
    if identifier and identifier[0].isdigit():
        identifier = '_' + identifier
    return identifier

def main():
    base_dir = Path(__file__).parent.parent
    data_dir = base_dir / "data"
    
    # Read source files
    projects_content = (data_dir / "projects.ts").read_text()
    blog_content = (data_dir / "blog.ts").read_text()
    
    # Extract type definitions
    print("Extracting type definitions...")
    
    # Project types - extract everything before the legacyProjectSlugMap
    project_types_match = re.search(
        r'(export type .*?)(?=const legacyProjectSlugMap)',
        projects_content,
        re.DOTALL
    )
    if project_types_match:
        (data_dir / "types" / "project.ts").write_text(project_types_match.group(1).strip() + "\n")
        print(f"  ✓ Created data/types/project.ts")
    
    # Blog types - extract everything before the legacyBlogSlugMap
    blog_types_match = re.search(
        r'(export type .*?)(?=const legacyBlogSlugMap)',
        blog_content,
        re.DOTALL
    )
    if blog_types_match:
        (data_dir / "types" / "blog.ts").write_text(blog_types_match.group(1).strip() + "\n")
        print(f"  ✓ Created data/types/blog.ts")
    
    # Extract legacy slug map
    slug_map_match = re.search(
        r'const legacyProjectSlugMap: Record<string, string> = \{[^}]+\};',
        projects_content,
        re.DOTALL
    )
    if slug_map_match:
        slug_map_content = f"export {slug_map_match.group(0)}\n"
        (data_dir / "legacy-slug-maps.ts").write_text(slug_map_content)
        print(f"  ✓ Created data/legacy-slug-maps.ts")
    
    # Extract and write individual projects
    print("\nExtracting projects...")
    projects = extract_projects(projects_content)
    project_slugs = []
    
    for project_obj in projects:
        slug = get_slug_from_object(project_obj)
        filename = sanitize_filename(slug)
        project_slugs.append(slug)
        
        # Clean up the object string - remove leading comma and whitespace
        clean_obj = project_obj.lstrip().lstrip(',').lstrip()
        
        file_content = f"""import {{ Project }} from "../types/project";

export const project: Project = {clean_obj};
"""
        
        (data_dir / "projects" / f"{filename}.ts").write_text(file_content)
        print(f"  ✓ Created data/projects/{filename}.ts")
    
    # Extract and write individual blog posts
    print("\nExtracting blog posts...")
    posts = extract_blog_posts(blog_content)
    post_slugs = []
    
    for post_obj in posts:
        slug = get_slug_from_object(post_obj)
        filename = sanitize_filename(slug)
        post_slugs.append(slug)
        
        # Clean up the object string - remove leading comma and whitespace
        clean_obj = post_obj.lstrip().lstrip(',').lstrip()
        
        file_content = f"""import {{ BlogPost }} from "../types/blog";

export const post: BlogPost = {clean_obj};
"""
        
        (data_dir / "blog" / f"{filename}.ts").write_text(file_content)
        print(f"  ✓ Created data/blog/{filename}.ts")
    
    # Create barrel exports for projects
    print("\nCreating barrel exports...")
    projects_index = "import { Project } from \"../types/project\";\n\n"
    for slug in project_slugs:
        filename = sanitize_filename(slug)
        identifier = slug_to_identifier(slug)
        projects_index += f"import {{ project as {identifier} }} from \"./{filename}\";\n"
    
    projects_index += "\nexport const projects: Project[] = [\n"
    for slug in project_slugs:
        identifier = slug_to_identifier(slug)
        projects_index += f"  {identifier},\n"
    projects_index += "];\n"
    
    (data_dir / "projects" / "index.ts").write_text(projects_index)
    print(f"  ✓ Created data/projects/index.ts")
    
    # Create barrel exports for blog
    blog_index = "import { BlogPost } from \"../types/blog\";\n\n"
    for slug in post_slugs:
        filename = sanitize_filename(slug)
        identifier = slug_to_identifier(slug)
        blog_index += f"import {{ post as {identifier} }} from \"./{filename}\";\n"
    
    blog_index += "\nexport const blogPosts: BlogPost[] = [\n"
    for slug in post_slugs:
        identifier = slug_to_identifier(slug)
        blog_index += f"  {identifier},\n"
    blog_index += "];\n"
    
    (data_dir / "blog" / "index.ts").write_text(blog_index)
    print(f"  ✓ Created data/blog/index.ts")
    
    print(f"\n✅ Refactoring complete!")
    print(f"   Projects: {len(projects)} files created")
    print(f"   Blog posts: {len(posts)} files created")
    print(f"\nNext steps:")
    print(f"  1. Update imports in consuming code")
    print(f"  2. Test the application")
    print(f"  3. Remove old monolith files")

if __name__ == "__main__":
    main()
