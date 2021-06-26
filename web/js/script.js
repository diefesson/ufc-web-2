function toLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
}

function fromLocalStorage(key, def = null) {
    var json = localStorage.getItem(key)
    if (json != null)
        return JSON.parse(json)
    else
        return def
}

var app = new Vue({
    el: "#app",
    data() {
        return {
            title: "",
            description: "",
            rooms: "",
            parkingSpaces: "",
            terrainArea: "",
            buildingArea: "",
            localization: "",
            price: "",
            imageUrl: "",
            adsList: []
        }
    },
    methods: {
        clearAdsForm() {
            this.title = ""
            this.description = ""
            this.rooms = ""
            this.parkingSpaces = ""
            this.terrainArea = ""
            this.buildingArea = ""
            this.localization = ""
            this.price = ""
            this.imageUrl = ""
        },
        clearAdsList() {
            this.adsList = []
            toLocalStorage("adsList", this.adsList)
        },
        readAds() {
            return {
                title: this.title.trim(),
                description: this.description.trim(),
                rooms: this.rooms,
                parkingSpaces: this.parkingSpaces,
                terrainArea: this.terrainArea,
                buildingArea: this.buildingArea,
                localization: this.localization.trim(),
                price: this.price,
                imageUrl: this.imageUrl
            }
        },
        validateAds(ads) {
            if (ads.title.length == 0)
                return "Informe um titulo"
            if (ads.description.length == 0)
                return "Informe uma descrição"
            if (ads.rooms.length == 0)
                return "Informe a quantidade de quartos"
            if (ads.rooms <= 0)
                return "Deve ter ao menos um quarto"
            if (ads.parkingSpaces.length == 0)
                return "Informe a quantidade de caragens"
            if (ads.parkingSpaces < 0)
                return "A quantidade de estacionamentos não pode ser negativa"
            if (ads.terrainArea.length == 0)
                return "Informe a área do terreno"
            if (ads.terrainArea <= 0)
                return "A área do terreno deve ser positiva"
            if (ads.buildingArea.length == 0)
                return "Informe a área construida"
            if (ads.buildingArea <= 0)
                return "A área construida deve ser positiva"
            if (Number(ads.terrainArea) < Number(ads.buildingArea))
                return "A área do terreno deve ser maior que a área construida"
            if (ads.localization.length == 0)
                return "Informe a localidade"
            if (ads.price.length == 0)
                return "Informe o preço"
            if (ads.price <= 0)
                return "O preço deve ser positivo"
            try {
                new URL(ads.imageUrl)
            } catch (e) {
                return "A URL da imagem é inválida"
            }
            return null
        },
        loadAdsList() {
            this.adsList = fromLocalStorage("adsList", [])
        },
        addAds() {
            var ads = this.readAds()
            var error = this.validateAds(ads)
            if (error == null) {
                this.adsList.push(ads)
                toLocalStorage("adsList", this.adsList)
            } else {
                alert(error)
            }
        }
    }
})