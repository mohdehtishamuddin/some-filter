var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
var shortlist =[]
var table = `<table id="my">
<tr>
<th>ID</th>
<th>Name</th>
<th>Brand</th>
<th>Operating System</th>
<th>Remove</th>
</tr>`
$(document).ready(function(){
display();
$("#os").change(()=>{
    sorting()
})
$("#brand").change(()=>{
    sorting()
})
$("#myInput").on("keyup",function(){
    search();
})
$(document).on("click",".remove",function(){
console.log(this.id);
var id = this.id;
$(`#${id}`).parent().hide();
})
})
var brand = new Set();
var os = new Set();
function display(){
    var list = "";
    var brandval = "";
    var osval
    products.forEach(element =>{
        list +=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="remove" id ="${element.id}">X</td>
        
        </tr>`;

        brand.add(element.brand);
        os.add(element.os);
    });
    $("#product_table").empty();
    $("#product_table").append(table+list+"</table>");
    os.forEach(element => {
        osval += `<option>${element}</option>`

    });
    brand.forEach(element => {
        brandval += `<option>${element}</option>`
    });
    $("#brand").append(brandval);
    $("#os").append(osval);
}
function sorting(){
    var brand =$("#brand").val();
        console.log(brand);

         var OS =$("#os").val();
        console.log(OS);

        var count =0;
        if(OS !=""&& brand !=""){
          //  console.log('yes')
            shortlist = [];
            products.forEach(element=> {
                
                if(element.brand==brand && element.os==OS){
                    
                    shortlist.push(element);
                    sortdisplay()
                    count = 1
                }
            });
        
            if(count==0){
                shortlist=[];
             sortdisplay()
            }
        }
    else if(brand !=""&& OS==""){
        shortlist=[];
        console.log("brand");
        products.forEach(element=>{
            if(element.brand==brand){
                shortlist.push(element);
                sortdisplay()
            }
        });
    }
    else if(OS !=""&& brand==""){
        shortlist=[];
        console.log("OS");
        products.forEach(element=>{
            if(element.os==OS){
                shortlist.push(element);
                sortdisplay()
            }
        });
    }
    
    }
    
 function search(){
   
      var value = $('#myInput').val().toLowerCase();
      $("#my tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        console.log('hello');
      });
   }
 function sortdisplay(){
       // console.log('display function');
     var list="";
          shortlist.forEach(element=>{
        list +=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="remove" id="${element.id}">X</td>
        </tr>`;
      });
     $("#product_table").empty();
     $("#product_table").append(table+list+"</table>");
     }
     console.log("Hello");
    
