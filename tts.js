  async function speak() {
            const text = document.getElementById("text").value.trim();
            const voice = document.getElementById("voice").value;
            if (!text) {
                alert("Please enter some text!");
                return;
            }

            const audio = document.getElementById("audio");
            const convertBtn = document.querySelector('.convert-btn');
            
            convertBtn.textContent = "Converting...";
            convertBtn.disabled = true;

            try {
                const response = await fetch(
                    `https://ab-text-voice.abrahamdw882.workers.dev/?q=${encodeURIComponent(text)}&voicename=${voice}`
                );
                const data = await response.json();
                if (data.url) {
                    audio.src = data.url;
                    audio.play();
                } else {
                    alert("No audio URL returned!");
                }
            } catch (error) {
                console.error("Error fetching audio:", error);
                alert("Something went wrong while fetching audio.");
            } finally {
                convertBtn.textContent = "Convert to Speech";
                convertBtn.disabled = false;
            }
        }

        const header = document.querySelector("header");
        window.addEventListener("scroll", function() {
            header.classList.toggle("sticky", window.scrollY > 120);
        });

        let menu = document.querySelector("#menu-icon");
        let navlist = document.querySelector('.navlist');
        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('active');
        };
        window.onscroll = () => {
            if (window.scrollY > 120) {
                menu.classList.remove('bx-x');
                navlist.classList.remove('active');
            }
        };

        function createSnowflakes() {
            const numberOfSnowflakes = 100;
            const snowflakesContainer = document.querySelector('.snowflakes');

            for (let i = 0; i < numberOfSnowflakes; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                snowflake.style.left = `${Math.random() * 100}vw`;
                snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
                snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
                snowflake.style.animationDelay = `${Math.random() * 5}s`;
                snowflakesContainer.appendChild(snowflake);
                snowflake.textContent = '.';
            }
        }

        window.onload = createSnowflakes;
