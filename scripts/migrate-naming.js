#!/usr/bin/env node

/**
 * Migration script for Asante naming conventions
 * This script helps update existing components to follow the established naming patterns
 */

const fs = require('fs');
const path = require('path');

// Naming convention mappings
const componentNameMappings = {
  // Page components
  'UbuntuDashboard': 'UbuntuDashboardPage',
  'HeritagePage': 'HeritageDiscoveryPage',
  'LoginPage': 'LoginPage', // Already correct
  'SignupPage': 'SignupPage', // Already correct
  'OnboardingPage': 'OnboardingPage', // Already correct
  'WisdomPathsPage': 'WisdomPathsPage', // Already correct
  'UbuntuCirclesPage': 'UbuntuCirclesPage', // Already correct
  'CoursesPage': 'CoursesPage', // Already correct
  'DonatePage': 'DonatePage', // Already correct
  
  // Layout components
  'AuthenticatedLayout': 'AuthenticatedLayout', // Already correct
  'Header': 'Header', // Already correct
  'Navigation': 'Navigation', // Already correct
  
  // UI components
  'Button': 'Button', // Already correct
  'Card': 'Card', // Already correct
  'Input': 'Input', // Already correct
  'Logo': 'Logo', // Already correct
  'LoadingButton': 'LoadingButton', // Already correct
  'LoadingSpinner': 'LoadingSpinner', // Already correct
  'ThemeToggle': 'ThemeToggle', // Already correct
  'Avatar': 'Avatar', // Already correct
  'Badge': 'Badge', // Already correct
  'Progress': 'Progress', // Already correct
  'DropdownMenu': 'DropdownMenu', // Already correct
  
  // Community components
  'CircleGatherings': 'CircleGatherings', // Already correct
  'CulturalCalendar': 'CulturalCalendar', // Already correct
  'ElderGuidance': 'ElderGuidance', // Already correct
  'UbuntuImpact': 'UbuntuImpact', // Already correct
  
  // Ubuntu components
  'WisdomCard': 'WisdomCard', // Already correct
};

// CSS class patterns to update
const cssClassMappings = {
  // Add specific CSS class mappings here
  // Example: 'old-class': 'asante-component-new-class'
};

function updateComponentName(content, oldName, newName) {
  if (oldName === newName) return content;
  
  const patterns = [
    // Function declaration
    new RegExp(`export\\s+default\\s+function\\s+${oldName}\\b`, 'g'),
    // Function expression
    new RegExp(`const\\s+${oldName}\\s*=\\s*\\(`, 'g'),
    // Import statements
    new RegExp(`import\\s+{[^}]*\\b${oldName}\\b[^}]*}\\s+from`, 'g'),
    // JSX usage
    new RegExp(`<${oldName}\\b`, 'g'),
    new RegExp(`</${oldName}>`, 'g'),
  ];
  
  let updatedContent = content;
  patterns.forEach(pattern => {
    updatedContent = updatedContent.replace(pattern, match => 
      match.replace(oldName, newName)
    );
  });
  
  return updatedContent;
}

function updateCSSClasses(content) {
  let updatedContent = content;
  
  Object.entries(cssClassMappings).forEach(([oldClass, newClass]) => {
    const classPattern = new RegExp(`\\b${oldClass}\\b`, 'g');
    updatedContent = updatedContent.replace(classPattern, newClass);
  });
  
  return updatedContent;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    
    // Update component names
    Object.entries(componentNameMappings).forEach(([oldName, newName]) => {
      if (content.includes(oldName)) {
        updatedContent = updateComponentName(updatedContent, oldName, newName);
        hasChanges = true;
        console.log(`  Updated component name: ${oldName} → ${newName}`);
      }
    });
    
    // Update CSS classes
    const originalContent = updatedContent;
    updatedContent = updateCSSClasses(updatedContent);
    if (updatedContent !== originalContent) {
      hasChanges = true;
      console.log(`  Updated CSS classes`);
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
    
    return hasChanges;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function main() {
  const srcDir = path.join(process.cwd(), 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ src directory not found. Run this script from the project root.');
    process.exit(1);
  }
  
  console.log('🚀 Starting Asante naming convention migration...\n');
  
  const files = findFiles(srcDir);
  console.log(`📁 Found ${files.length} files to process\n`);
  
  let updatedFiles = 0;
  
  files.forEach(file => {
    console.log(`Processing: ${path.relative(process.cwd(), file)}`);
    if (processFile(file)) {
      updatedFiles++;
    }
    console.log('');
  });
  
  console.log(`🎉 Migration complete! Updated ${updatedFiles} files.`);
  console.log('\n📋 Next steps:');
  console.log('1. Review the changes made');
  console.log('2. Run your tests to ensure everything works');
  console.log('3. Update any documentation that references old names');
  console.log('4. Consider running the linter to catch any remaining issues');
}

if (require.main === module) {
  main();
}

module.exports = {
  updateComponentName,
  updateCSSClasses,
  processFile,
  findFiles
}; 