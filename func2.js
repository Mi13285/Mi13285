// Функция без аргументов
function hello() {
    alert("Hello")
}

// Функция с двумя аргументами и возращающая значение их суммы
function sum(a, b) {
    console.log("Считаю")
    return a + b
}

// Глобальная константа (переменная)
const lang = "RU"

function hiLang() {
    // Локальная константа (переменная)
    // !!! Будет иметь более высший приоритет
    const lang = "EN"
    
    if (lang == "RU") {
        console.log("Привет")
    } else {
        console.log("Hello")
    }
}

hiLang()
