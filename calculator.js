function theme1()
{
    let s = document.getElementById("night");
    let v = s.className;

    if(v == "moon")
    {
        s.className = "bright";
        let ss = document.getElementById("calculator-body");
        ss.style.backgroundColor = "#22252D";
        ss = document.getElementById("output");
        ss.style.backgroundColor = "#22252D";
        ss = document.getElementById("all-buttons");
        ss.style.backgroundColor = "#282C35";
        ss = document.getElementById("prev-output");
        ss.style.color = "#CCD1D1";
        ss = document.getElementById("cur-output");
        ss.style.color = "white";
        var vv = document.getElementsByClassName("btn");

        for(let i=0; i<vv.length; i++)
        {
            vv[i].style.backgroundColor = "rgb(41,45,54)";
            if((i+1)%4 != 0 && (i != 0 && i != 1 && i != 2 && i != vv.length-1))vv[i].style.color = "white";
        }

        ss = document.getElementById("icon");
        ss.style.backgroundColor = "rgb(41,45,54)";
        ss = document.getElementById("night");
        ss.setAttribute("src", "./icon/moon-w.svg")
        ss = document.getElementById("brightness");
        ss.setAttribute("src", "./icon/brightness-w.svg");
    }
}

function theme2()
{
    let s = document.getElementById("night");
    let v = s.className;

    if(v == "bright")
    {
        s.className = "moon";
        let ss = document.getElementById("calculator-body");
        ss.style.backgroundColor = "white";
        ss = document.getElementById("output");
        ss.style.backgroundColor = "white";
        ss = document.getElementById("all-buttons");
        ss.style.backgroundColor = "#F4F6F6";
        ss = document.getElementById("prev-output");
        ss.style.color = "gray";
        ss = document.getElementById("cur-output");
        ss.style.color = "black";
        var vv = document.getElementsByClassName("btn");

        for(let i=0; i<vv.length; i++)
        {
            vv[i].style.backgroundColor = "#E5E8E8";
            if((i+1)%4 != 0 && (i != 0 && i != 1 && i != 2 && i != vv.length-1))vv[i].style.color = "black";
        }

        ss = document.getElementById("icon");
        ss.style.backgroundColor = "#E5E8E8";
        ss = document.getElementById("night");
        ss.setAttribute("src", "icon/moon.svg")
        ss = document.getElementById("brightness");
        ss.setAttribute("src", "icon/brightness.svg");
        
    }
}

const allBtn = document.querySelectorAll('.btn');
console.log(allBtn.length);

for(let i=0; i<allBtn.length; i++)
{
    const a = allBtn[i].innerText;
    allBtn[i].addEventListener('click',function(){
        displayOutput(a);
    });
}

function displayOutput(val)
{
    if(Number(val) >=0 && Number(val) <= 9 || val == '.')
    {
        const s = document.getElementById('cur-output');
        const preVal = s.innerText;
        s.innerHTML = preVal+val;
    }
    else if(val == "AC")
    {
        const a = document.getElementById('cur-output');
        const b = document.getElementById('prev-output');
        a.innerText = "";
        b.innerText = "";
    }
    else if(val == "CE")
    {
        const  a = document.getElementById('cur-output');
        const b = a.innerText;
        const ss = b.slice(0, b.length-1);
        a.innerText = ss;
    }
    else if(val == "=")
    {
        const a = document.getElementById('prev-output');
        const b = a.innerText;
        let char = b[b.length-1];
        const c = b.slice(0, b.length-1);
        const s = document.getElementById('cur-output');
        const ss = s.innerText;

        if(ss == "")
        {
            s.innerText = "";
            return 0;
        }

        const ans = operation(Number(c), Number(ss), char);
        a.innerText = ans;
        s.innerText = "";
    }
    else
    {
        const a = document.getElementById('cur-output');
        const s = document.getElementById('prev-output');

        if(s.innerText != "")
        {
            const ss = s.innerText+val;
            s.innerText = ss;
        }
        else
        {
            const b = a.innerText+val;
            s.innerText = b;
            a.innerText = "";
        }
    }
}

function updateOutput(val)
{
    const s = document.getElementById('prev-output');
    s.innerHTML = val;
}


function operation(val1, val2, op)
{
    if(op == '+')return val1 + val2;
    else if(op == '-')return val1 - val2;
    else if(op == '×')return val1 * val2;
    else if(op == '÷')return val1/val2;
    else if(op == '%')return val1/100;
}
