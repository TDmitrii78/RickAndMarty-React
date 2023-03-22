class ServiceRickAndMorty {
    

    getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error - ${res.status}`);
        }
        return res.json();
    }

    getRequest = () => {
        return this.getResourse("https://rickandmortyapi.com/api/character/?page=3");
    }

    


}

export default ServiceRickAndMorty;