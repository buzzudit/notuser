#!/usr/bin/env python3
"""Update imports to use new modular data structure."""

import re
from pathlib import Path

def update_file_imports(file_path: Path) -> bool:
    """Update imports in a single file. Returns True if changes were made."""
    content = file_path.read_text()
    original = content
    
    # Update project imports
    content = re.sub(
        r'from "@/data/projects"',
        'from "@/data/projects"',
        content
    )
    
    # Update blog imports
    content = re.sub(
        r'from "@/data/blog"',
        'from "@/data/blog"',
        content
    )
    
    # Update Project type imports - add /types if importing types
    content = re.sub(
        r'import\s+\{\s*Project\s*\}\s+from\s+"@/data/projects"',
        'import { Project } from "@/data/types/project"',
        content
    )
    
    content = re.sub(
        r'import\s+\{\s*ProjectMetric\s*\}\s+from\s+"@/data/projects"',
        'import { ProjectMetric } from "@/data/types/project"',
        content
    )
    
    content = re.sub(
        r'import\s+\{\s*ProjectGalleryItem\s*\}\s+from\s+"@/data/projects"',
        'import { ProjectGalleryItem } from "@/data/types/project"',
        content
    )
    
    # Update BlogPost type imports
    content = re.sub(
        r'import\s+\{\s*BlogPost\s*\}\s+from\s+"@/data/blog"',
        'import { BlogPost } from "@/data/types/blog"',
        content
    )
    
    content = re.sub(
        r'import\s+\{\s*BlogSection\s*\}\s+from\s+"@/data/blog"',
        'import { BlogSection } from "@/data/types/blog"',
        content
    )
    
    if content != original:
        file_path.write_text(content)
        return True
    return False

def main():
    base_dir = Path(__file__).parent.parent
    
    # Find all TypeScript files
    ts_files = list(base_dir.glob("**/*.ts")) + list(base_dir.glob("**/*.tsx"))
    
    # Exclude node_modules, .next, and data directory
    ts_files = [
        f for f in ts_files 
        if "node_modules" not in str(f) 
        and ".next" not in str(f)
        and "/data/" not in str(f)
    ]
    
    updated_count = 0
    for file_path in ts_files:
        if update_file_imports(file_path):
            print(f"  ✓ Updated {file_path.relative_to(base_dir)}")
            updated_count += 1
    
    print(f"\n✅ Updated {updated_count} files")

if __name__ == "__main__":
    main()
