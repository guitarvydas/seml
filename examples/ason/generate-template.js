  function generate_2 () {
      let notationSource = document.getElementById('transpiled_1').value;
      let scnGrammar = document.getElementById('grammar_2').value;
      let semantics = document.getElementById('semantics_2').value;
      let generatedSCNSemantics = transpiler (semantics, glueGrammar, "_glue", glueSemantics);

      _ruleInit();
      try {
	  document.getElementById('status_2').innerHTML = "FAILED";
	  let semObject = eval('(' + generatedSCNSemantics + ')');
	  document.getElementById ("transpiled_2").value = semObject;
	  let tr = transpiler(notationSource, scnGrammar, "_glue", semObject);
	  document.getElementById('transpiled_2').value = tr;
	  document.getElementById('status_2').innerHTML = "OK";
      }
       catch (err) {
	  document.getElementById('status_2').innerHTML = err;
       }	   
  }
