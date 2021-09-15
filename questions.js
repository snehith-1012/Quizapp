var arr=["why","who","when","what","whose","will they","wont they","why are they","why","whose"];
var scores=[0,0,0,0,0,0,0,0,0,0]
var z=0;
var res;

function validate(n)
{
    let s=(z+1).toString();
    document.getElementById(s).style.backgroundColor="green";
    scores[z]=n*10;
}
var conf=0;
function increment()
{
        // if(z==9)
        // {
        //     // if(document.getElementById('continue').innerHTML=="SUBMIT" && conf==0)
        //     // {
        //     //     alert("before you end test check your score with the button");
        //     //     conf+=1;
        //     // }
        //     // else if(document.getElementById('continue').innerHTML=="SUBMIT" && conf==1)
        //     // {
        //     //     location.href='./result.html';
        //     // }
        //     document.getElementById('continue').innerHTML="SUBMIT";
        //     return;
        // }
        if(z>=9)
        {
            var sum=0;
             for (var i=0;i<10;i++)
            {
                sum+=scores[i];
            }
            // console.log(sum,"hai");
            localStorage.setItem("score",sum);
            return;
        }
        z+=1;
        document.getElementById('question').innerHTML=z+1+"."+arr[z];
}

function load()
{
    localStorage.setItem("score",0);
    document.getElementById('question').innerHTML=z+1+"."+arr[z];
}

function load_que(p)
{
    document.getElementById('question').innerHTML=p+1+"."+arr[p];
    z=p;
}

function decrement()
{
    if(z==0)
    {
        return;
    }
    z-=1;
    document.getElementById('question').innerHTML=z+1+"."+arr[z];
}


// function go_to_result()
// {
//     location.href('./result.html');
// }


// function calculate_score()
// {
//     var sum=0;
//     for (var i=0;i<10;i++)
//     {
//         sum+=scores[i];
//     }
//     res=sum;
//     document.getElementById('result').innerHTML="your score is "+res;
// }



// localStorage.setItem("scores",scores);


