class Animal {
    constructor (iucn_code, reino, filo, classe, ordem, familia, genero, especie) {
        this.iucn_code = iucn_code;
        this.reino = reino;
        this.filo = filo;
        this.classe = classe;
        this.ordem = ordem;
        this.familia = familia;
        this.genero = genero;
        this.especie = especie;

        switch (this.iucn_code) {
            case "CR":
                this.iucn_class = "Criticamente em Perigo";
                break;
            case "EN":
                this.iucn_class = "Em Perigo";
                break;
            case "VU":
                this.iucn_class = "Vulnerável";
                break;
            default:
                this.iucn_class = "";
                break;
        }
    };

    getFullDescription() {
        console.log(`Espécie: ${this.genero} ${this.especie}\n\nReino: ${this.reino}\nFilo: ${this.filo}\nClasse: ${this.classe}\nOrdem: ${this.familia}\nGênero: ${this.genero}\nSituação: ${this.iucn_class}`)
    }

    getKingdom() {
        console.log(`${this.reino}`);
    }
    
    getPhyla() {
    console.log(`${this.filo}`);        
    }

    getClass() {
        console.log(`${this.classe}`);
    }

    getOrder() {
        console.log(`${this.ordem}`);
    }

    getFamily() {
        console.log(`${this.familia}`);
    }

    getGen() {
        console.log(`${this.genero}`);
    }

    getSituation() {
        console.log(`${this.iucn_code} - ${this.iucn_class}`);
    }
}

let N_bancanus = new Animal('CR', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'bancanus');

let N_javanicus = new Animal('CR', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'javanicus');

let N_pygmaeus = new Animal('EN', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'pygmaeus');

let N_coucang = new Animal('EN', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'coucang');

let N_menagensis = new Animal('VU', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'menagensis');

let N_kayan = new Animal('VU', 'Animalia', 'Chordata', 'Mammalia', 'Primates', 'Lorisidae', 'Nycticebus', 'kayan');