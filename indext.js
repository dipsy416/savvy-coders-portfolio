<script>
                  // create `prompt` to ask for name
                let name=prompt("what is your name?");
                // check if name is a 'blank string
                // REFactor the error check into a function
                // This is a function Declaration
                //`name` is here as a GOLBLE veriable that `anyone` in the <script> can ferrly access and modify.
                function checkName(name){
                  if(name === ""){
                  // if name is blank, ask again and be sure to capture/overwrite the value of name
                  name = prompt("really, whar is your name?");
                  // RECURSION - function calls itself again
                  name = checkName(name);
                  }

               return name;
                }
                //Function expression
                //let checkName = function();{
                //}
                // we capture what is returned by checkNmae and overwrite name with that value
                name = checkName(name);


                alert(`hello ${name}`);
                </script>
