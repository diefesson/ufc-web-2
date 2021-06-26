function clearInput(inputId) {
    document.getElementById(inputId).value = ""
}

function readInput(inputId) {
    return document.getElementById(inputId).value
}

function readAds() {
    return {
        title: readInput("titleInput"),
        description: readInput("descriptionInput"),
        rooms: readInput("roomsInput"),
        parkingSpaces: readInput("parkingSpacesInput"),
        terrainArea: readInput("terrainAreaInput"),
        buildingArea: readInput("buildingAreaInput"),
        localization: readInput("localizationInput"),
        price: readInput("priceInput"),
        image: readInput("imageInput")
    }
}

function headline02(text) {
    var element = document.createElement("p")
    element.innerText = text
    element.classList += "headline-02"
    return element
}

function adsImage(url) {
    var element = document.createElement("img")
    element.setAttribute("src", url)
    element.classList += "ads-image"
    return element
}

function adsDiv(ads) {
    var root = document.createElement("div")
    root.classList += "ads"
    root.append(headline02("Titulo: " + ads.title))
    root.append(headline02("Descrição: " + ads.description))
    root.append(headline02("Quartos: " + ads.rooms))
    root.append(headline02("Vagas de caragem: " + ads.parkingSpaces))
    root.append(headline02("Área do terreno: " + ads.terrainArea + "m2"))
    root.append(headline02("Área construida: " + ads.buildingArea + "m2"))
    root.append(headline02("Localidade: " + ads.localization))
    root.append(headline02("Preco: " + ads.price + " / mês"))
    root.append(adsImage(ads.image))
    root.append(document.createElement("hr"))
    return root
}

function createAds() {
    var adsList = document.getElementById("adsList")
    adsList.append(adsDiv(readAds()))
}

function clearAdsForm() {
    clearInput("titleInput")
    clearInput("descriptionInput")
    clearInput("roomsInput")
    clearInput("parkingSpacesInput")
    clearInput("terrainAreaInput")
    clearInput("buildingAreaInput")
    clearInput("localizationInput")
    clearInput("priceInput")
    clearInput("imageInput")
}

function clearAdsList() {
    var adsList = document.getElementById("adsList")
    adsList.innerHTML = ""
}