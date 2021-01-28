//calculating script

      //on calculate click
      $("#form1").click(function () {
        //get values from form one
        var g1 = parseInt($("#g1").val());
        var a1 = parseInt($("#a1").val());
        var p1 = parseInt($("#p1").val());

        console.log("value: " + g1);
        //A = g^a mod p
        if (
          Number.isInteger(g1) &&
          Number.isInteger(a1) &&
          Number.isInteger(p1)
        ) {
          var val1 = Math.pow(g1, a1) % p1;
          console.log(val1);
          $("#A1").val(val1);
        }
      });

      //on calculate click
      $("#form2").click(function () {
        //get values from form one
        var b2 = parseInt($("#b2").val());
        var a2 = parseInt($("#a2").val());
        var p2 = parseInt($("#p2").val());
        if (
          Number.isInteger(b2) &&
          Number.isInteger(a2) &&
          Number.isInteger(p2)
        ) {
          var val1 = Math.pow(b2, a2) % p2;
          console.log(val1);
          $("#S2").val(val1);
        }
      });