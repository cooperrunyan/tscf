export function fallback() {
  return `{
  "$schema": "http://json.schemastore.org/tsconfig", // Specify the schema for type checking and intellisense

  "compilerOptions": {
    "rootDir": "./src", // Where are .ts files stored
    "outDir": "./bin", // Where will outputted files be stored

    "paths": {
      "~/*": ["./src/*"] // Specify that "~/path/to/file" will be quivalent to "./src/path/to/file"
    },

    "allowJs": true, // Allow the usage of javascript files
    "allowSyntheticDefaultImports": true, // Import a default CommonJS export as an ES6 import
    "allowUnreachableCode": false, // Throw an error if code can never be reached
    "alwaysStrict": true, // Always write "use strict" in javascript files
    "allowUmdGlobalAccess": true, // Allow using UMD globals without needing to specifically import them
    "allowUnusedLabels": true, // Don't throw an error if a label isn't used
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "baseUrl": ".", // Make sure the base url is the current working directory
    "checkJs": true, // Run type checking on javascript files
    "composite": false, // Writes a tsconfig.tsbuildinfo file
    "declarationDir": "./bin", // Where to write .d.ts files
    "declarationMap": true, // Write .map files for declaration files
    "diagnostics": false, // Log nerd stats
    "disableReferencedProjectLoad": true, // Disable preloading of types for large multi-projects
    "disableSizeLimit": false, // Remove the 20mb cap on total JS size
    "disableSolutionSearching": false, // Opt out of finding solutions in multiple projects
    "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files
    "declaration": true, // Write declaration files
    "downlevelIteration": true, // Use more performant iteration
    "esModuleInterop": true, // Allows support for CommonJS and ES Modules to interact
    "emitBOM": false, // Write a Byte Order Mark at the beginning of files
    "emitDeclarationOnly": false, // Only write .d.ts files
    "emitDecoratorMetadata": true, // Write metadata about decorators in source files
    "experimentalDecorators": true, // Use experimental decorators "@Whatever"
    "extendedDiagnostics": false, // Write extra nerd stats
    "exactOptionalPropertyTypes": true, // Differentiate between an optional type and undefined
    "forceConsistentCasingInFileNames": true, // Force consistent casing in file names
    "lib": ["Dom", "ESNext", "DOM.Iterable"], // Certain type libraries to include
    "importHelpers": true, // Import helpers once per project instead of per-file
    "importsNotUsedAsValues": "preserve", // Determines what method of type importing to use
    "isolatedModules": true, // Make sure each file has an "import" or "export"
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "inlineSourceMap": false, // Write source maps within JS files
    "inlineSources": false, // Write source code within JS map files
    "jsx": "preserve", // Determines outputted React function component syntax
    "jsxFactory": "React.createElement", // What method is called to create an element
    "jsxFragmentFactory": "React.Fragment", // What method is called to create a fragment
    "keyofStringsOnly": false, // Force keyof operator to only return strings
    "listEmittedFiles": false, // Log all written files
    "listFiles": false, // Log all files
    "listFilesOnly": false, // Only list files instead of compiling
    "maxNodeModuleJsDepth": 0, // Depth to type check node modules
    "module": "esnext", // Determines what type of import system to use ("require", "import", etc.)
    "moduleResolution": "node", // Specifies how to resolve modules
    "noEmit": false, // Don't write any compiled JS
    "noUncheckedIndexedAccess": true, // Disable index access without undefined possibility
    "noFallthroughCasesInSwitch": true, // Enable error reporting for fallthrough cases in switch statements
    "noImplicitAny": true, // Don't allow a token to be implicitly any
    "noImplicitOverride": true, // Specifically write the word "override" before class properties if it overrides
    "noImplicitReturns": true, // Always have a code path that returns
    "noImplicitThis": true, // Don't allow "this" to implicitly be any
    "noUnusedLocals": false, // No error when local variables aren't used
    "noUnusedParameters": false, // No error when function parameters aren't used
    "noErrorTruncation": true, // Don't shorten types in error messages
    "preserveWatchOutput": false, // Preserve watch output
    "pretty": true, // Make the terminal output look nicer
    "removeComments": true, // Delete comments from output files
    "resolveJsonModule": true, // Import .json files
    "skipLibCheck": false, // Skip type checks on lib files
    "strict": true, // All strict type checkings
    "strictBindCallApply": true, // Check that the arguments for bind, call, and apply methods match the original function.
    "strictFunctionTypes": true, // Make sure params and return types are compatible
    "strictNullChecks": true, // Make sure null is not equal to undefined
    "strictPropertyInitialization": true, // Make sure a property that isn't marked as optional gets initialized
    "target": "es6", // Target ECMAScript version
    "types": ["node"], // Lib files for the compiler
    "typeRoots": ["./node_modules/@types/"], // Type file locations
    "useUnknownInCatchVariables": true, // catch (err) {} is an "unknown" type instead of "any"
    "useDefineForClassFields": true // Use more modern ECMA syntax
  },

  "include": ["./src"], // Files to include
  "exclude": ["./bin", "node_modules"], // Files to exclude

  "buildOptions": {
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "force": false, // Build projects that haven't had any changes
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "traceResolution": false, // Log moduleResolution paths
    "verbose": false // Log everything
  },

  "compileOnSave": true, // Compile code on save

  "watchOptions": {
    "excludeDirectories": ["node_modules"], // Exclude watch directories
    "excludeFiles": [] // Exclude watch files
  }
}
`;
}

export function react() {
  return `{
  "$schema": "http://json.schemastore.org/tsconfig", // Specify the schema for type checking and intellisense

  "compilerOptions": {
    "paths": {
      "~/*": ["./src/*"] // Specify that "~/path/to/file" will be quivalent to "./src/path/to/file"
    },

    "allowJs": true, // Allow the usage of javascript files
    "allowSyntheticDefaultImports": true, // Import a default CommonJS export as an ES6 import
    "allowUnreachableCode": false, // Throw an error if code can never be reached
    "alwaysStrict": true, // Always write "use strict" in javascript files
    "allowUmdGlobalAccess": true, // Allow using UMD globals without needing to specifically import them
    "allowUnusedLabels": true, // Don't throw an error if a label isn't used
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "baseUrl": ".", // Make sure the base url is the current working directory
    "checkJs": true, // Run type checking on javascript files
    "composite": true, // Writes a tsconfig.tsbuildinfo file
    "declarationDir": "./bin", // Where to write .d.ts files
    "declarationMap": true, // Write .map files for declaration files
    "diagnostics": false, // Log nerd stats
    "disableReferencedProjectLoad": true, // Disable preloading of types for large multi-projects
    "disableSizeLimit": false, // Remove the 20mb cap on total JS size
    "disableSolutionSearching": false, // Opt out of finding solutions in multiple projects
    "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files
    "declaration": false, // Write declaration files
    "downlevelIteration": true, // Use more performant iteration
    "esModuleInterop": true, // Allows support for CommonJS and ES Modules to interact
    "emitBOM": false, // Write a Byte Order Mark at the beginning of files
    "emitDeclarationOnly": false, // Only write .d.ts files
    "emitDecoratorMetadata": true, // Write metadata about decorators in source files
    "experimentalDecorators": true, // Use experimental decorators "@Whatever"
    "extendedDiagnostics": false, // Write extra nerd stats
    "exactOptionalPropertyTypes": true, // Differentiate between an optional type and undefined
    "forceConsistentCasingInFileNames": true, // Force consistent casing in file names
    "lib": ["Dom", "ESNext", "DOM.Iterable"], // Certain type libraries to include
    "importHelpers": true, // Import helpers once per project instead of per-file
    "importsNotUsedAsValues": "preserve", // Determines what method of type importing to use
    "isolatedModules": true, // Make sure each file has an "import" or "export"
    "incremental": true, // Writes a tsbuildinfo file for faster development
    "inlineSourceMap": false, // Write source maps within JS files
    "inlineSources": false, // Write source code within JS map files
    "jsx": "react-jsx", // Determines outputted React function component syntax
    "jsxFactory": "React.createElement", // What method is called to create an element
    "jsxFragmentFactory": "React.Fragment", // What method is called to create a fragment
    "keyofStringsOnly": false, // Force keyof operator to only return strings
    "listEmittedFiles": false, // Log all written files
    "listFiles": false, // Log all files
    "listFilesOnly": false, // Only list files instead of compiling
    "maxNodeModuleJsDepth": 0, // Depth to type check node modules
    "module": "esnext", // Determines what type of import system to use ("require", "import", etc.)
    "moduleResolution": "node", // Specifies how to resolve modules
    "noEmit": true, // Don't write any compiled JS
    "noUncheckedIndexedAccess": true, // Disable index access without undefined possibility
    "noFallthroughCasesInSwitch": true, // Enable error reporting for fallthrough cases in switch statements
    "noImplicitAny": true, // Don't allow a token to be implicitly any
    "noImplicitOverride": true, // Specifically write the word "override" before class properties if it overrides
    "noImplicitReturns": true, // Always have a code path that returns
    "noImplicitThis": true, // Don't allow "this" to implicitly be any
    "noUnusedLocals": false, // No error when local variables aren't used
    "noUnusedParameters": false, // No error when function parameters aren't used
    "noErrorTruncation": true, // Don't shorten types in error messages
    "preserveWatchOutput": false, // Preserve watch output
    "pretty": true, // Make the terminal output look nicer
    "removeComments": true, // Delete comments from output files
    "resolveJsonModule": true, // Import .json files
    "skipLibCheck": false, // Skip type checks on lib files
    "strict": true, // All strict type checkings
    "strictBindCallApply": true, // Check that the arguments for bind, call, and apply methods match the original function.
    "strictFunctionTypes": true, // Make sure params and return types are compatible
    "strictNullChecks": true, // Make sure null is not equal to undefined
    "strictPropertyInitialization": true, // Make sure a property that isn't marked as optional gets initialized
    "target": "es6", // Target ECMAScript version
    "types": ["node", "react"], // Lib files for the compiler
    "typeRoots": ["./node_modules/@types/"], // Type file locations
    "useUnknownInCatchVariables": true, // catch (err) {} is an "unknown" type instead of "any"
    "useDefineForClassFields": true // Use more modern ECMA syntax
  },

  "include": ["*.ts", "*.tsx"], // Files to include
  "exclude": ["node_modules"], // Files to exclude

  "buildOptions": {
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "force": false, // Build projects that haven't had any changes
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "traceResolution": false, // Log moduleResolution paths
    "verbose": false // Log everything
  },

  "compileOnSave": true, // Compile code on save

  "watchOptions": {
    "excludeDirectories": ["node_modules"], // Exclude watch directories
    "excludeFiles": [] // Exclude watch files
  }
}
`;
}

export function next() {
  return `{
  "$schema": "http://json.schemastore.org/tsconfig", // Specify the schema for type checking and intellisense

  "compilerOptions": {
    "paths": {
      "~/*": ["./src/*"] // Specify that "~/path/to/file" will be quivalent to "./src/path/to/file"
    },

    "allowJs": true, // Allow the usage of javascript files
    "allowSyntheticDefaultImports": true, // Import a default CommonJS export as an ES6 import
    "allowUnreachableCode": false, // Throw an error if code can never be reached
    "alwaysStrict": true, // Always write "use strict" in javascript files
    "allowUmdGlobalAccess": true, // Allow using UMD globals without needing to specifically import them
    "allowUnusedLabels": true, // Don't throw an error if a label isn't used
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "baseUrl": ".", // Make sure the base url is the current working directory
    "checkJs": true, // Run type checking on javascript files
    "composite": true, // Writes a tsconfig.tsbuildinfo file
    "declarationDir": "./bin", // Where to write .d.ts files
    "declarationMap": true, // Write .map files for declaration files
    "diagnostics": false, // Log nerd stats
    "disableReferencedProjectLoad": true, // Disable preloading of types for large multi-projects
    "disableSizeLimit": false, // Remove the 20mb cap on total JS size
    "disableSolutionSearching": false, // Opt out of finding solutions in multiple projects
    "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files
    "declaration": false, // Write declaration files
    "downlevelIteration": true, // Use more performant iteration
    "esModuleInterop": true, // Allows support for CommonJS and ES Modules to interact
    "emitBOM": false, // Write a Byte Order Mark at the beginning of files
    "emitDeclarationOnly": false, // Only write .d.ts files
    "emitDecoratorMetadata": true, // Write metadata about decorators in source files
    "experimentalDecorators": true, // Use experimental decorators "@Whatever"
    "extendedDiagnostics": false, // Write extra nerd stats
    "exactOptionalPropertyTypes": true, // Differentiate between an optional type and undefined
    "forceConsistentCasingInFileNames": true, // Force consistent casing in file names
    "lib": ["Dom", "ESNext", "DOM.Iterable"], // Certain type libraries to include
    "importHelpers": true, // Import helpers once per project instead of per-file
    "importsNotUsedAsValues": "preserve", // Determines what method of type importing to use
    "isolatedModules": true, // Make sure each file has an "import" or "export"
    "incremental": true, // Writes a tsbuildinfo file for faster development
    "inlineSourceMap": false, // Write source maps within JS files
    "inlineSources": false, // Write source code within JS map files
    "jsx": "preserve", // Determines outputted React function component syntax
    "jsxFactory": "React.createElement", // What method is called to create an element
    "jsxFragmentFactory": "React.Fragment", // What method is called to create a fragment
    "keyofStringsOnly": false, // Force keyof operator to only return strings
    "listEmittedFiles": false, // Log all written files
    "listFiles": false, // Log all files
    "listFilesOnly": false, // Only list files instead of compiling
    "maxNodeModuleJsDepth": 0, // Depth to type check node modules
    "module": "esnext", // Determines what type of import system to use ("require", "import", etc.)
    "moduleResolution": "NodeNext", // Specifies how to resolve modules
    "noEmit": true, // Don't write any compiled JS
    "noUncheckedIndexedAccess": true, // Disable index access without undefined possibility
    "noFallthroughCasesInSwitch": true, // Enable error reporting for fallthrough cases in switch statements
    "noImplicitAny": true, // Don't allow a token to be implicitly any
    "noImplicitOverride": true, // Specifically write the word "override" before class properties if it overrides
    "noImplicitReturns": true, // Always have a code path that returns
    "noImplicitThis": true, // Don't allow "this" to implicitly be any
    "noUnusedLocals": false, // No error when local variables aren't used
    "noUnusedParameters": false, // No error when function parameters aren't used
    "noErrorTruncation": true, // Don't shorten types in error messages
    "preserveWatchOutput": false, // Preserve watch output
    "pretty": true, // Make the terminal output look nicer
    "removeComments": true, // Delete comments from output files
    "resolveJsonModule": true, // Import .json files
    "skipLibCheck": false, // Skip type checks on lib files
    "strict": true, // All strict type checkings
    "strictBindCallApply": true, // Check that the arguments for bind, call, and apply methods match the original function.
    "strictFunctionTypes": true, // Make sure params and return types are compatible
    "strictNullChecks": true, // Make sure null is not equal to undefined
    "strictPropertyInitialization": true, // Make sure a property that isn't marked as optional gets initialized
    "target": "es6", // Target ECMAScript version
    "types": ["node", "react"], // Lib files for the compiler
    "typeRoots": ["./node_modules/@types/"], // Type file locations
    "useUnknownInCatchVariables": true, // catch (err) {} is an "unknown" type instead of "any"
    "useDefineForClassFields": true // Use more modern ECMA syntax
  },

  "include": ["*.ts", "*.tsx"], // Files to include
  "exclude": ["node_modules"], // Files to exclude

  "buildOptions": {
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "force": false, // Build projects that haven't had any changes
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "traceResolution": false, // Log moduleResolution paths
    "verbose": false // Log everything
  },

  "compileOnSave": true, // Compile code on save

  "watchOptions": {
    "excludeDirectories": ["node_modules"], // Exclude watch directories
    "excludeFiles": [] // Exclude watch files
  }
}
`;
}

export function node() {
  return `{
  "$schema": "http://json.schemastore.org/tsconfig", // Specify the schema for type checking and intellisense

  "compilerOptions": {
    "rootDir": "./src", // Where are .ts files stored
    "outDir": "./bin", // Where will outputted files be stored

    "allowJs": true, // Allow the usage of javascript files
    "allowSyntheticDefaultImports": true, // Import a default CommonJS export as an ES6 import
    "allowUnreachableCode": false, // Throw an error if code can never be reached
    "alwaysStrict": true, // Always write "use strict" in javascript files
    "allowUmdGlobalAccess": true, // Allow using UMD globals without needing to specifically import them
    "allowUnusedLabels": true, // Don't throw an error if a label isn't used
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "baseUrl": ".", // Make sure the base url is the current working directory
    "checkJs": true, // Run type checking on javascript files
    "composite": false, // Writes a tsconfig.tsbuildinfo file
    "declarationDir": "./bin", // Where to write .d.ts files
    "declarationMap": true, // Write .map files for declaration files
    "diagnostics": false, // Log nerd stats
    "disableReferencedProjectLoad": true, // Disable preloading of types for large multi-projects
    "disableSizeLimit": false, // Remove the 20mb cap on total JS size
    "disableSolutionSearching": false, // Opt out of finding solutions in multiple projects
    "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files
    "declaration": true, // Write declaration files
    "downlevelIteration": true, // Use more performant iteration
    "esModuleInterop": true, // Allows support for CommonJS and ES Modules to interact
    "emitBOM": false, // Write a Byte Order Mark at the beginning of files
    "emitDeclarationOnly": false, // Only write .d.ts files
    "emitDecoratorMetadata": true, // Write metadata about decorators in source files
    "experimentalDecorators": true, // Use experimental decorators "@Whatever"
    "extendedDiagnostics": false, // Write extra nerd stats
    "exactOptionalPropertyTypes": true, // Differentiate between an optional type and undefined
    "forceConsistentCasingInFileNames": true, // Force consistent casing in file names
    "lib": ["Dom", "ESNext"], // Certain type libraries to include
    "importHelpers": true, // Import helpers once per project instead of per-file
    "importsNotUsedAsValues": "preserve", // Determines what method of type importing to use
    "isolatedModules": true, // Make sure each file has an "import" or "export"
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "inlineSourceMap": false, // Write source maps within JS files
    "inlineSources": false, // Write source code within JS map files
    "jsx": "preserve", // Determines outputted React function component syntax
    "jsxFactory": "React.createElement", // What method is called to create an element
    "jsxFragmentFactory": "React.Fragment", // What method is called to create a fragment
    "keyofStringsOnly": false, // Force keyof operator to only return strings
    "listEmittedFiles": false, // Log all written files
    "listFiles": false, // Log all files
    "listFilesOnly": false, // Only list files instead of compiling
    "maxNodeModuleJsDepth": 0, // Depth to type check node modules
    "module": "esnext", // Determines what type of import system to use ("require", "import", etc.)
    "moduleResolution": "node", // Specifies how to resolve modules
    "noEmit": false, // Write compiled JS
    "noUncheckedIndexedAccess": true, // Disable index access without undefined possibility
    "noFallthroughCasesInSwitch": true, // Enable error reporting for fallthrough cases in switch statements
    "noImplicitAny": true, // Don't allow a token to be implicitly any
    "noImplicitOverride": true, // Specifically write the word "override" before class properties if it overrides
    "noImplicitReturns": true, // Always have a code path that returns
    "noImplicitThis": true, // Don't allow "this" to implicitly be any
    "noUnusedLocals": false, // No error when local variables aren't used
    "noUnusedParameters": false, // No error when function parameters aren't used
    "noErrorTruncation": true, // Don't shorten types in error messages
    "preserveWatchOutput": false, // Preserve watch output
    "pretty": true, // Make the terminal output look nicer
    "removeComments": true, // Delete comments from output files
    "resolveJsonModule": true, // Import .json files
    "skipLibCheck": false, // Skip type checks on lib files
    "strict": true, // All strict type checkings
    "strictBindCallApply": true, // Check that the arguments for bind, call, and apply methods match the original function.
    "strictFunctionTypes": true, // Make sure params and return types are compatible
    "strictNullChecks": true, // Make sure null is not equal to undefined
    "strictPropertyInitialization": true, // Make sure a property that isn't marked as optional gets initialized
    "target": "esnext", // Target ECMAScript version
    "types": ["node"], // Lib files for the compiler
    "typeRoots": ["./node_modules/@types/"], // Type file locations
    "useUnknownInCatchVariables": true, // catch (err) {} is an "unknown" type instead of "any"
    "useDefineForClassFields": true // Use more modern ECMA syntax
  },

  "include": ["./src"], // Files to include
  "exclude": ["./bin", "node_modules"], // Files to exclude

  "buildOptions": {
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "force": false, // Build projects that haven't had any changes
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "traceResolution": false, // Log moduleResolution paths
    "verbose": false // Log everything
  },

  "compileOnSave": true, // Compile code on save

  "watchOptions": {
    "excludeDirectories": ["node_modules"], // Exclude watch directories
    "excludeFiles": [] // Exclude watch files
  }
}
`;
}

export function browser() {
  return `{
  "$schema": "http://json.schemastore.org/tsconfig", // Specify the schema for type checking and intellisense

  "compilerOptions": {
    "rootDir": "./src", // Where are .ts files stored
    "outDir": "./bin", // Where will outputted files be stored

    "allowJs": true, // Allow the usage of javascript files
    "allowSyntheticDefaultImports": true, // Import a default CommonJS export as an ES6 import
    "allowUnreachableCode": false, // Throw an error if code can never be reached
    "alwaysStrict": true, // Always write "use strict" in javascript files
    "allowUmdGlobalAccess": true, // Allow using UMD globals without needing to specifically import them
    "allowUnusedLabels": true, // Don't throw an error if a label isn't used
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "baseUrl": ".", // Make sure the base url is the current working directory
    "checkJs": true, // Run type checking on javascript files
    "composite": false, // Writes a tsconfig.tsbuildinfo file
    "declarationDir": "./bin", // Where to write .d.ts files
    "declarationMap": true, // Write .map files for declaration files
    "diagnostics": false, // Log nerd stats
    "disableReferencedProjectLoad": true, // Disable preloading of types for large multi-projects
    "disableSizeLimit": false, // Remove the 20mb cap on total JS size
    "disableSolutionSearching": false, // Opt out of finding solutions in multiple projects
    "disableSourceOfProjectReferenceRedirect": true, // Disable preferring source files instead of declaration files
    "declaration": true, // Write declaration files
    "downlevelIteration": true, // Use more performant iteration
    "esModuleInterop": true, // Allows support for CommonJS and ES Modules to interact
    "emitBOM": false, // Write a Byte Order Mark at the beginning of files
    "emitDeclarationOnly": false, // Only write .d.ts files
    "emitDecoratorMetadata": true, // Write metadata about decorators in source files
    "experimentalDecorators": true, // Use experimental decorators "@Whatever"
    "extendedDiagnostics": false, // Write extra nerd stats
    "exactOptionalPropertyTypes": true, // Differentiate between an optional type and undefined
    "forceConsistentCasingInFileNames": true, // Force consistent casing in file names
    "lib": ["Dom", "ESNext", "DOM.Iterable", "WebWorker"], // Certain type libraries to include
    "importHelpers": true, // Import helpers once per project instead of per-file
    "importsNotUsedAsValues": "preserve", // Determines what method of type importing to use
    "isolatedModules": true, // Make sure each file has an "import" or "export"
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "inlineSourceMap": false, // Write source maps within JS files
    "inlineSources": false, // Write source code within JS map files
    "jsx": "preserve", // Determines outputted React function component syntax
    "jsxFactory": "React.createElement", // What method is called to create an element
    "jsxFragmentFactory": "React.Fragment", // What method is called to create a fragment
    "keyofStringsOnly": false, // Force keyof operator to only return strings
    "listEmittedFiles": false, // Log all written files
    "listFiles": false, // Log all files
    "listFilesOnly": false, // Only list files instead of compiling
    "maxNodeModuleJsDepth": 0, // Depth to type check node modules
    "module": "esnext", // Determines what type of import system to use ("require", "import", etc.)
    "moduleResolution": "node", // Specifies how to resolve modules
    "noEmit": false, // Don't write any compiled JS
    "noUncheckedIndexedAccess": true, // Disable index access without undefined possibility
    "noFallthroughCasesInSwitch": true, // Enable error reporting for fallthrough cases in switch statements
    "noImplicitAny": true, // Don't allow a token to be implicitly any
    "noImplicitOverride": true, // Specifically write the word "override" before class properties if it overrides
    "noImplicitReturns": true, // Always have a code path that returns
    "noImplicitThis": true, // Don't allow "this" to implicitly be any
    "noUnusedLocals": false, // No error when local variables aren't used
    "noUnusedParameters": false, // No error when function parameters aren't used
    "noErrorTruncation": true, // Don't shorten types in error messages
    "preserveWatchOutput": false, // Preserve watch output
    "pretty": true, // Make the terminal output look nicer
    "removeComments": true, // Delete comments from output files
    "resolveJsonModule": true, // Import .json files
    "skipLibCheck": false, // Skip type checks on lib files
    "strict": true, // All strict type checkings
    "strictBindCallApply": true, // Check that the arguments for bind, call, and apply methods match the original function.
    "strictFunctionTypes": true, // Make sure params and return types are compatible
    "strictNullChecks": true, // Make sure null is not equal to undefined
    "strictPropertyInitialization": true, // Make sure a property that isn't marked as optional gets initialized
    "target": "es3", // Target ECMAScript version
    "types": [], // Lib files for the compiler
    "typeRoots": ["./node_modules/@types/"], // Type file locations
    "useUnknownInCatchVariables": true, // catch (err) {} is an "unknown" type instead of "any"
    "useDefineForClassFields": true // Use more modern ECMA syntax
  },

  "include": ["./src"], // Files to include
  "exclude": ["./bin", "node_modules"], // Files to exclude

  "buildOptions": {
    "assumeChangesOnlyAffectDirectDependencies": true, // Asume that a changed file will only have changes to files directly depending on it
    "force": false, // Build projects that haven't had any changes
    "incremental": false, // Writes a tsbuildinfo file for faster development
    "traceResolution": false, // Log moduleResolution paths
    "verbose": false // Log everything
  },

  "compileOnSave": true, // Compile code on save

  "watchOptions": {
    "excludeDirectories": ["node_modules"], // Exclude watch directories
    "excludeFiles": [] // Exclude watch files
  }
}
`;
}
