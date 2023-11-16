let budget = document.querySelector("#budget");

document.querySelector("#btnEntertainment").addEventListener('click', () => {
    document.querySelector("#Entertainment").style.display = 'block';

    document.querySelector("#Food").style.display = 'none';
    document.querySelector("#Clothing").style.display = 'none';
    document.querySelector("#Bills").style.display = 'none';
});

 document.querySelector("#btnFood").addEventListener('click', () => {
    document.querySelector("#Food").style.display = 'block';

    document.querySelector("#Entertainment").style.display = 'none';
    document.querySelector("#Clothing").style.display = 'none';
    document.querySelector("#Bills").style.display = 'none';
 });

 document.querySelector("#btnClothing").addEventListener('click', () => {
    document.querySelector("#Clothing").style.display = 'block';

    document.querySelector("#Food").style.display = 'none';
    document.querySelector("#Entertainment").style.display = 'none';
    document.querySelector("#Bills").style.display = 'none';
 });

 document.querySelector("#btnBills").addEventListener('click', () => {
    document.querySelector("#Bills").style.display = 'block';

    document.querySelector("#Food").style.display = 'none';
    document.querySelector("#Clothing").style.display = 'none';
    document.querySelector("#Entertainment").style.display = 'none';
 });