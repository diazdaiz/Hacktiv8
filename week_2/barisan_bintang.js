var rows1=5;
var rows2=5;
var rows3=5;
var i;
var j;
var temp1;  //temporary 1
var temp2;  //temporary 2
temp1="*"

//
for(i=1; i<=rows1; i++)
{
  console.log(temp1);
}
console.log()

for(i=1; i<=rows2; i++)
{
  temp2="";
  for(j=1; j<=rows2; j++)
  {
    temp2=temp2+temp1;
  }
  console.log(temp2);
}
console.log();


for(i=1; i<=rows3; i++)
{
  temp2="";
  for(j=1; j<=i; j++)
  {
    temp2=temp2+temp1;
  }
  console.log(temp2)
}
