window.onload = function () {

    // Our garden
    // Our garden object - this is the main container for all our garden data
    let garden = {
        // An array to store the individual flowers
        flowers: [],
        // How many flowers in the garden
        // This is a simple property storing a number value
        numFlowers: 20,

        /* grass object - nested object inside the garden object */
        grass: {
            // The color of the grass (background)
            grassColor: {
                r: 120,
                g: 180,
                b: 120,
            },
            // The grass element - creating a new div element in memory
            // This div hasn't been added to the page yet, just created
            grassDiv: document.createElement("div"),
        },

        /* sky object - another nested object, same structure as grass */
        sky: {
            // The color of the sky (background)
            // Notice the pattern: each section (sky, grass, sun) has its own color object

            skyColor: {
                r: 83,
                g: 154,
                b: 240,
            },
            // The sky element - another div created in memory
            skyDiv: document.createElement("div"),
        },

        /*sun object */
        // sun: {
        //     sunColor: {
        //         r: 240,
        //         g: 206,
        //         b: 83,
        //     },
        //     // The sun element - div created in memory
        //     sunDiv: document.createElement("div"),
        // },

    };

    let sun = new Sun(10, 10, { r: 240, g: 206, b: 83 })

    /* Call the function to render the sun, sky and grass */
    createAndRenderTheGarden();

    /* The aforementionned function */
    function createAndRenderTheGarden() {
        /* SKY SECTION */
        // .classList.add() adds a CSS class to the element
        garden.sky.skyDiv.classList.add("sky");

        // Setting the background color using inline CSS
        // We're accessing deeply nested properties: garden.sky.skyColor.r
        garden.sky.skyDiv.style.background = `rgb(
        ${garden.sky.skyColor.r},
        ${garden.sky.skyColor.g},
        ${garden.sky.skyColor.b}
        )`;

        // Adding the sky div to the page
        // appendChild() adds our sky div as a child of the main element
        document.getElementsByTagName("main")[0].appendChild(garden.sky.skyDiv);

        // /* SUN SECTION - rendered INSIDE the sky */
        // // Same pattern: add class for CSS styling
        // garden.sun.sunDiv.classList.add("sun");

        // // Set the sun's background color using RGB values from our object
        // garden.sun.sunDiv.style.background = `rgb(
        // ${garden.sun.sunColor.r},
        // ${garden.sun.sunColor.g},
        // ${garden.sun.sunColor.b}
        // )`;
        sun.renderSun();

        // Append sun to the SKY div (not to main), sky contains sun
        // document.getElementsByClassName("sky")[0].appendChild(sun.sunDiv);

        /* GRASS SECTION */
        // Add the "grass" CSS class to our grass div
        garden.grass.grassDiv.classList.add("grass");

        // Set grass background color from our nested color object
        garden.grass.grassDiv.style.background = `rgb(
        ${garden.grass.grassColor.r},
        ${garden.grass.grassColor.g},
        ${garden.grass.grassColor.b}
        )`;

        // Add grass div to the main element (same level as sky)
        document.getElementsByTagName("main")[0].appendChild(garden.grass.grassDiv);

    }

    // THIS WAS WHEN WE USED A JS LITTERAL OBJECT
    // add numFlowers at one time
    // for (let i = 0; i < garden.numFlowers; i++) {
    //     garden.flowers.push(createFlower());
    // }

    // for (let i = 0; i < garden.flowers.length; i++) {
    //     renderFlower(garden.flowers[i]);

    // }

    // To make one flower
    // let flower = new Flower();
    // flower.renderFlower();

    // AND NOW WE ARE USING THE CLASS / CONSTRUCTOR OBJECTS
    // Create our flowers by counting up to the number of the flowers
    // for (let i = 0; i < garden.numFlowers; i++) {
    //     // NEW! Create a new flower
    //     let flower = new Flower();
    //     // Render the flower to the array of flowers
    //     garden.flowers.push(flower);
    //     garden.flowers[i].renderFlower();
    // }


    for (let i = 0; i < garden.numFlowers; i++) {
        // Create variables for our arguments for clarity
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * 120;
        let size = Math.random() * 30 + 50;
        let stemLength = Math.random() * 50 + 50;
        let petalColor = {
            r: parseInt(Math.random() * 155) + 100,
            g: parseInt(Math.random() * 155) + 100,
            b: parseInt(Math.random() * 155) + 100,
        };

        // Create a new flower using the arguments
        let flower = new Flower(x, y, size, stemLength, petalColor);
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
    }

    for (let i = 0; i < garden.numFlowers; i++) {

        garden.flowers[i].renderFlower();

    }

    // console.log(garden.flowers[0])


    window.addEventListener("keydown", function handleKeyDown(e) {
        //call the handleKeyDown method in sun

        sun.updateSun(e);

    });

}




