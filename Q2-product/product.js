document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function() {
        const productId = document.querySelector('#productId').value;

        fetch(`https://dummyjson.com/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                const title = data.title;
                const category = data.category;
                const description = data.description;
                const price = data.price;

                document.querySelector('#result').innerHTML =
                    `Title: ${title}<br>
             Category: ${category}<br>
             Description: ${description}<br>
             Price: ${price}`;
            })
        return false;
    }

});