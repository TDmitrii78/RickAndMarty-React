class ServiceRickAndMorty {
    
    getResourse = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error - ${res.status}`);
        }
        return res.json();
    }

    getRequest = (url) => {
        return this.getResourse(url);
    }
}

export default ServiceRickAndMorty;