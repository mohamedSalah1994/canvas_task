course1 = document.querySelector('#co1');
course2 = document.querySelector('#co2');
course3 = document.querySelector('#co3');
course4 = document.querySelector('#co4');

inp1 = document.querySelector('#inp1');
inp2 = document.querySelector('#inp2');
inp3 = document.querySelector('#inp3');
inp4 = document.querySelector('#inp4');

bar = document.querySelector('#bar');
line = document.querySelector('#line');
Pie = document.querySelector('#pie');
doug = document.querySelector('#doug');

btn = document.querySelector('#Dbtn');

canv1 = document.querySelector('#canv1');
canv2 = document.querySelector('#canv2');
canv3 = document.querySelector('#canv3');
canv4 = document.querySelector('#canv4');

let last=document.querySelector('#last')

context1=canv1.getContext('2d');
context2=canv2.getContext('2d');
context3=canv3.getContext('2d');
context4=canv4.getContext('2d');
context5=last.getContext('2d');

width = canv1.width;
height = canv1.height;

values=[inp1,inp2,inp3,inp4];
colors=['#28a745','#007bff','#ffc107','#e83e8c'];


let total = inp1.value + inp2.value + inp3.value + inp4.value;
btn.addEventListener('click' , function (){



            if (bar.checked) {
                context1.clearRect(0, 0, width, height);
                context1.font = '13px Arial'
                context1.lineWidth = 2
                context1.moveTo(20, height - 20)
                context1.lineTo(20, 0)
                context1.stroke()
                context1.moveTo(20, height - 20)
                context1.lineTo(width, height - 20)
                context1.stroke();
                for (var i = 0; i <= 100; i += 10) {
                    context1.fillText(i, 0, height - 20 - i * 3)
                }
                var courses = [course1, course2, course3, course4],
                    index = 25;
                for (let i = 0; i < courses.length; i++) {
                    context1.fillText(courses[i].value, index, height - 3);
                    index += 70;
                }
                context1.fillStyle = '#28a745';
                context1.fillRect(20, height - 20 - inp1.value * height / 100, 30, inp1.value * height / 100);
                context1.fillStyle = '#007bff';
                context1.fillRect(90, height - 20 - inp2.value * height / 100, 30, inp2.value * height / 100);
                context1.fillStyle = '#ffc107';
                context1.fillRect(160, height - 20 - inp3.value * height / 100, 30, inp3.value * height / 100);
                context1.fillStyle = '#e83e8c';
                context1.fillRect(230, height - 20 - inp4.value * height / 100, 30, inp4.value * height / 100);
            }

            //-----------------------------------------------------------------------------------------------------
            if(line.checked){

                context2.clearRect(0,0,width,height);
                context2.font='13px Arial'
                context2.lineWidth=2
                context2.moveTo(20,height-20)
                context2.lineTo(20,0)
                context2.stroke()
                context2.moveTo(20,height-20)
                context2.lineTo(width,height-20)
                context2.stroke();
                for(var i=0;i<=100;i+=10)
                {
                    context2.fillText(i,0,height-20-i*3)
                }
                var courses=[course1,course2,course3,course4],
                    index = 20;

                for(let i=0; i<courses.length; i++){
                    context2.fillText(courses[i].value,index,height-3);
                    index += 70;
                }
                context2.lineWidth=2;
                context2.moveTo(20,height-20-inp1.value* 3)
                context2.lineTo(90,height-20-inp2.value*3)
                context2.lineTo(160,height-20-inp3.value*3)
                context2.lineTo(230,height-20-inp4.value*3)
                context2.stroke();

            }
            //----------------------------------------------------------------------------------------------------
            if(Pie.checked){
                let arr=[inp1,inp2,inp3,inp4],
                    start=0;

                for(var i=0;i<arr.length;i++)
                {
                    var end=((arr[i].value /100) * 2*Math.PI)+start;
                    context3.lineWidth=2;
                    context3.fillStyle=colors[i];
                    context3.beginPath();
                    context3.moveTo(width/2,height/2)
                    context3.arc(width/2,height/2,width/3,start,end);
                    context3.lineTo(width/2,height/2)
                    context3.fill()
                    context3.stroke()
                    context3.closePath()


                    var slice_angle = 2 * Math.PI * arr[i].value/100;
                    var pieRadius = Math.min(width/3,height/3);
                    var labelX =width/2 + (pieRadius / 2) * Math.cos(start+slice_angle/2);
                    var labelY = height/2 + (pieRadius / 2) * Math.sin(start+slice_angle/2);
                    context3.fillText(arr[i].value+"%", labelX,labelY);
                    start=end;
                }
                //----------------------------------------------------------------------------------------

            }
            // ---------------------------------------------------------------------------------------------------
            if(doug.checked){

                let arr=[inp1,inp2,inp3,inp4],
                    start=0;

                for(var i=0;i<arr.length;i++)
                {
                    var end=((arr[i].value /100) * 2*Math.PI)+start;
                    context4.lineWidth=2;
                    context4.fillStyle=colors[i];
                    context4.beginPath();
                    context4.moveTo(width/2,height/2)
                    context4.arc(width/2,height/2,width/3,start,end);
                    context4.fill()
                    context4.stroke()
                    context4.closePath()


                    var slice_angle = 2 * Math.PI * arr[i].value/100;
                    var pieRadius = Math.min(width/3,height/3);
                    var labelX =width/2 + (pieRadius / 2) * Math.cos(start+slice_angle/2);
                    var labelY = height/2 + (pieRadius / 2) * Math.sin(start+slice_angle/2);
                    context4.fillText(arr[i].value+"%", labelX,labelY);
                    start=end;
                }
                context4.fillStyle='white';
                context4.beginPath();
                context4.arc(width/2,height/2,30,0,Math.PI*2);
                context4.fill()
                context4.closePath()

            }
            //---------------------------------------------------------------------------------------------------------

            for(var i=1;i<5;i++)
            {
                context5.fillStyle=colors[i-1]
                context5.beginPath();
                context5.arc(150,25*i,5,0,2*Math.PI);
                context5.fill()
                context5.closePath()
                context5.fillStyle='Black'
                context5.fillText(courses[i-1].value,160,25*i)
                context5.fillText(values[i-1].value+'%',190,25*i)
            }

});
