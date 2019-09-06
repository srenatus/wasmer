initSidebarItems({"constant":[["VERSION","The current version of this crate"]],"fn":[["compile_with","Compile a [`Module`] using the provided compiler from WebAssembly binary code. This function is useful if it is necessary to a compile a module before it can be instantiated and must be used if you wish to use a different backend from the default."],["compile_with_config","The same as `compile_with` but changes the compiler behavior with the values in the `CompilerConfig`"],["load_cache_with",""],["validate","Perform validation as defined by the WebAssembly specification. Returns `true` if validation succeeded, `false` if validation failed."],["validate_and_report_errors","The same as `validate` but with an Error message on failure"],["validate_and_report_errors_with_features","The same as `validate_and_report_errors` but with a Features."]],"macro":[["debug",""],["func",""],["imports","Generate an [`ImportObject`] safely."],["trace",""]],"mod":[["cache",""],["codegen",""],["error",""],["export",""],["fault",""],["global",""],["import",""],["instance",""],["loader",""],["memory",""],["module",""],["parse",""],["prelude",""],["state",""],["structures",""],["table",""],["tiering",""],["trampoline_x64","Trampoline generator for carrying context with function pointer."],["typed_func",""],["types",""],["units",""],["vm",""]],"struct":[["DynFunc","A representation of an exported WebAssembly function."],["Func",""],["Instance","An instantiated WebAssembly module."],["Module","A compiled WebAssembly module."]],"trait":[["IsExport",""]],"type":[["Result",""]]});