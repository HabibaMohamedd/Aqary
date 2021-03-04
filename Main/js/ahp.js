function DoAHP() {
var array_of_values = new Array(6);
var x =0;
var y=0;
var rating_matrix = new Array(5);
var standardized_rating_matrix = new Array(5);
var criteria_weights = new Array(4)
for (var i = 0; i < rating_matrix.length; i++) {
   rating_matrix[i] = [];
   standardized_rating_matrix[i] = [];
   criteria_weights[i] = [];
}
                                rating_matrix[0][0]= standardized_rating_matrix[0][0]=0;
                                rating_matrix[0][1] = rating_matrix[1][0]=standardized_rating_matrix[0][1]=standardized_rating_matrix[1][0] =criteria_weights[0][0] ="price";
                                rating_matrix[0][2] = rating_matrix[2][0]=standardized_rating_matrix[0][2]=standardized_rating_matrix[2][0] =criteria_weights[0][1] ="size";
                                rating_matrix[0][3] = rating_matrix[3][0]=standardized_rating_matrix[0][3]=standardized_rating_matrix[3][0] =criteria_weights[0][2] ="bedrooms";
                                rating_matrix[0][4] = rating_matrix[4][0]=standardized_rating_matrix[0][4]=standardized_rating_matrix[4][0] =criteria_weights[0][3] ="bathrooms";
 var ele = document.getElementsByTagName('input');

            for(i = 0; i < ele.length; i++) {

                if(ele[i].type="radio") {

                    if(ele[i].checked){
                        console.log( i +
                                ele[i].name + " Value: "
                                + ele[i].value );
                                array_of_values[x] = ele[i].value;
                                x++;
               } }
            }
            for (var j = 0; j < array_of_values.length; j++)
                            {
                            console.log(array_of_values[j]);
                            }
            for (var i = 1; i < 5; i++) {
                for (j =i; j < 5; j++)
                {
                                                    if(i==j) {
                                                    rating_matrix[i][j] = 1;
                                                    }else {
                console.log("y is : "+y + "j is : " + j + "i is : " + i);
                    rating_matrix[j][i] = array_of_values[y];
                    rating_matrix[i][j] = 1/array_of_values[y];
                    y++;}
                }
                                                                 if(y==array_of_values.length+1) {
                                                                 break;
                                                                 }
                }
                for (var i = 1; i < 5; i++) {
                     var sum= 0;
                 for (var j = 1; j < 5; j++)
                                            {
                      sum = +sum + +rating_matrix[j][i];
                                            if(j==4) {
                                            console.log("the sum is : "+ sum);
                                            for(var x=1;x<5;x++){
                                            standardized_rating_matrix[x][i] = rating_matrix[x][i] /sum;
                                            }
                                            }
                                                                                        }
                                        }
                                        var count=0;
                                        for (var i = 1; i < 5; i++) {
                                                             var sum= 0;
                                                         for (var j = 1; j < 5; j++)
                                                                                    {
                                                               sum = +sum + +standardized_rating_matrix[i][j];
                                                                                    if(j==4) {
                                                                                    console.log("the sum is : "+ sum);
                                                                                      criteria_weights[1][count] = sum /4;
                                                                                      count++;
                                                                                }
                                                                                }
                                                                                }
allIds=localStorage.getItem("ArrayIds"); allIds=localStorage.getItem("ArrayIds"); allIds=localStorage.getItem("ArrayIds"); allIds=localStorage.getItem("ArrayIds"); allIds=localStorage.getItem("ArrayIds");
}