
function closepic() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("bigpicplace").style.display = "none";
}

var picnum = 1;

function openpic1() {
    picnum = 1;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic"+picnum+"-big.jpg')";
}
function openpic2() {
    picnum = 2;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic3() {
    picnum = 3;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic4() {
    picnum = 4;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic5() {
    picnum = 5;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic6() {
    picnum = 6;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic7() {
    picnum = 7;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic8() {
    picnum = 8;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic9() {
    picnum = 9;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic10() {
    picnum = 10;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic11() {
    picnum = 11;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic12() {
    picnum = 12;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic13() {
    picnum = 13;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic14() {
    picnum = 14;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic15() {
    picnum = 15;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}
function openpic16() {
    picnum = 16;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("bigpicplace").style.display = "block";
    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
}

    
function nextpic() {
    if (picnum == 16) {
        picnum = 1;
    }
    else {
        picnum++;
    }

    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
    document.getElementById("bigpicplace").style.display = "block"; 
}


function beforepic() {
    if (picnum == 1) {
        picnum = 16;
    }
    else {
        picnum--;
    }

    document.getElementById("bigpicplace").style.backgroundImage = "url('../gallery/pic" + picnum + "-big.jpg')";
    document.getElementById("bigpicplace").style.display = "block";
}

var x = 1;
function changepic() {
    var timer1 = setInterval(changepicnow, 2000);
}
function changepicnow() {
    x++;
    if (x > 4) {
        x = 0;
    }
    else {

        document.getElementById("lay2").style.backgroundImage = "url('../image/background" + x + ".jpg')";
     
    }
}
function coveron() {
    document.getElementById("lay2-whitecover").style.opacity = "0.9";
}
function coveroff() {
    document.getElementById("lay2-whitecover").style.display = "none";
}


function goupfunc(){
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 400) {
                $("#waside_nav_1").addClass("scrollnow");
                document.getElementById("go-up").style.display = "block";
                document.getElementById("go-facebook-a").style.display = "block";
            }

            else {
                document.getElementById("go-up").style.display = "none";
                document.getElementById("go-facebook-a").style.display = "none";
            }

        });
    });

}


function lay6cos1() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/lily-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "הדר ודניאל, ההורים של לילי";
    document.getElementById("lay6-window-text").innerHTML = "אנחנו בדיוק נפרדים עקב מעבר דירה, לאחר 4 שנים שבהם לילי הייתה חלק בלתי נפרד מהמעון. המעון הוא משפחה עבור לילי ועבורנו. כל בוקר ידענו שהיא בידיים טובות וקשה להסביר כמה זה יחסר לנו. אין בוקר שלא נפתח בנביחה וקצת פיפי מהתרגשות כשבאו מהמעון לאסוף את לילי לעוד יום. <br></br> נתגעגע מלא וכמובן שנבוא לבקר כדי לשחק! תודה רבה מכל הלב";
    document.getElementById("lay6-before").onclick = function () { lay6cos6() };
    document.getElementById("lay6-next").onclick = function () { lay6cos2() };
}
function lay6cos2() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/molly-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "נועה, אמא של מולי";
    document.getElementById("lay6-window-text").innerHTML = "הקשר של מולי ושלי נתמך לא מעט בעזרתם האדיבה של המעון. שמעתי המלצה, קבעתי ביקור ויוני הגיע. בהתחלה הייתי היסטרית, מהאימוץ, מהמעבר שגרם לה למתח, וגם מחוסר הידע שלי. כמעט מדי יום יוני קיבל טלפון ממני, היסטריה או תייעצות ולפעמים הוצאת קיטור. מולי לא עשתה למעון חיים קלים. היא אהבה את החיים בגינה ולא רצתה ללכת הביתה.  עם הזמן, כולנו מצאנו את דרכנו ללב של הבורדרית עם הרצועה בגינה. כיום, כל מעבר של מולי ליד הגינה מלווה בקשקוש זנב, כשאני נתקלת באחד מהצוות ברחוב היא מכריחה אותם לעצור ולהגיד שלום. היא בוטחת בהם, אוהבת אותם, ואני גיליתי צוות של אנשים עם סבלנות אין קץ, טוב לב והבנה גדולה בכלבים.";
    document.getElementById("lay6-before").onclick = function () { lay6cos1() };
    document.getElementById("lay6-next").onclick = function () { lay6cos3() };
}

function lay6cos3() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/wiggle-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "אלירן ויהודר, ההורים של וויגל";
    document.getElementById("lay6-window-text").innerHTML = "הגענו למעון מהמלצה, בתקופה שוויגל סבלה מחוסר מעש ושעמום (מה שהתבטא על הספה והמזרון). מהר מאוד וויגל התחברה לצוות ולכלבים של המעון והתחילה להתרגש ולקשקש בזנב כל פעם שהם באו. המעון מסב לוויגל הרבה שמחה ומאפשר לה להוציא אנרגיות ולהיות עם כלבים אחרים כל יום.  <br></br> היא מתרגשת בטירוף כל בוקר כשהם באים, ורצה אליהם כשאנחנו נפגשים במקרה ברחוב. כשהלכנו ברחוב כמה פעמים וכלבים ובעליהם זיהו את וויגל מהגינה, נפלה עלינו ההבנה שהכלבה שלנו פיתחה חיים משל עצמה וזה נפלא בעינינו.";
    document.getElementById("lay6-before").onclick = function () { lay6cos2() };
    document.getElementById("lay6-next").onclick = function () { lay6cos4() };
}
function lay6cos4() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/dana-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "דנה, אמא של ונוס, ג'וני ויוקו";
    document.getElementById("lay6-window-text").innerHTML = "את המעון אני מכירה עוד מהתקופה הפרה היסטורית בה לא הייתה אפילו גדר בגינה. ונוס הייתה בת יחידה, לאחר מכן ג'וני הצטרף לחיי ולפני שנה גם יוקו. למרבה הצער, הצטרף לזה גם חוסר זמן והיעדרות ממושכת לטובת עבודה, כמאמר הידוע I work hard so my dogs can have a better life. <br></br> המעון מהווה עבורי הצלה של ממש. אין לי מילים להודות לצוות המעון. הילדים מחכים כל הזמן שהסופש יגמר, אמא תחזור לעבודה והם יוכלו סוף סוף לחזור למעון :)";
    document.getElementById("lay6-before").onclick = function () { lay6cos3() };
    document.getElementById("lay6-next").onclick = function () { lay6cos5() };
}
function lay6cos5() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/nelly-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "אפרת ויובל, ההורים של נלי";
    document.getElementById("lay6-window-text").innerHTML = "בעבר נהנתה נלי ממרחבי בקעת הנדיב ומחצר גדולה. דאגנו שהמעבר לתל אביב לא יהיה לטעמה. אבל המעון הוא עבורנו ברכה ענקית. היא זוכה שם לחיי חברה שלא הייתה יכולה לחלום עליהם בכפר.  <br></br> היא פורחת בלהקה, פוגשת חברים, משחקת, מוציאה אנרגיות ונהנית מחיי העיר הגדולה. על הגננים במעון אנו סומכים בעיניים עצומות הודות למקצועיות והכימיה המידית. לפעמים בערב, אנחנו פוגשים אחד מהצוות וגילויי האהבה ההדדיים מדברים בעד עצמם. ";
    document.getElementById("lay6-before").onclick = function () { lay6cos4() };
    document.getElementById("lay6-next").onclick = function () { lay6cos6() };
}
function lay6cos6() {
    document.getElementById("lay6-black-cover").style.display = "block";
    document.getElementById("lay6-window").style.display = "block";
    document.getElementById("lay6-window-picture").style.backgroundImage = "url(../costumer/shaoli-2.jpg)";
    document.getElementById("lay6-window-h5").innerHTML = "אלירן ויהודר, ההורים של וויגל";
    document.getElementById("lay6-window-text").innerHTML = "שאולי הגיע אלי כגור פצפון וחרדתי. הוא גדל מהר והפך לכלב שובב והיפראקטיבי. חיפשתי פתרון כדי שלא יהיה לבד בשעות היום והרגשתי שטיול קצר עם דוגווקר לא מספיק. הוא היה לבד ועצוב ולא מצא איפה להוציא מרץ. שמעתי בשכונה על המעון ומאז כבר שנתיים שהוא שם כל יום. שאולי התחיל להיות קשוב ורגוע יותר, הוא מסתדר עם כל הכלבים ויש לו אף כמה חברים שהוא מזהה גם מחוץ למעון. חברי הצוות דואגים לו ואוהבים, הם חלק בלתי נפרד מהשגרה שלו (הוא מחכה להם ליד הדלת כל בוקר). בשבילי נוח לדעת שלפחות למשך 5 שעות ביום הוא בחוץ ודואגים לו כשאני בעבודה. ";
    document.getElementById("lay6-before").onclick = function () { lay6cos5() };
    document.getElementById("lay6-next").onclick = function () { lay6cos1() };
}


function lay6windowoff() {
    document.getElementById("lay6-black-cover").style.display = "none";
    document.getElementById("lay6-window").style.display = "none";
}






