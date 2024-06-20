function calcular() {
    const numarea1 = (window.document.getElementById("Area"))
    const numarea2 = (window.document.getElementById("Area2"))
    const numblocos1 = (window.document.getElementById("Blocos"))
    const numblocos2 = (window.document.getElementById("BlocosC"))
    const numareal = Number(numarea2.value)
    const numareac = Number(numarea1.value)
    const numblocos = Number(numblocos1.value)
    const numblocosc = Number(numblocos2.value)
    const result = (numareac*numareal) / ((numblocos/100)*(numblocosc/100))
    window.document.getElementById("res").innerHTML = 'Número de blocos necessários: ' + result
}