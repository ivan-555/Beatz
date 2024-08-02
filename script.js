// Page preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // wait min 2 seconds before hiding the preloader
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 1000);
});


// Music player
document.addEventListener('DOMContentLoaded', () => {
    const playlists = {
        rock: [
            {
                title: "Thunderstruck",
                artist: "AC/DC",
                cover: "img/covers/thunderstruck.jfif",
                src: "songs/thunderstruck.mp3",
                duration: "4:53"
            },
            {
                title: "The Unforgiven",
                artist: "Metallica",
                cover: "img/covers/the-unforgiven.jpg",
                src: "songs/the-unforgiven.mp4",
                duration: "6:23"
            },
            {
                title: "Der Himmel kann warten",
                artist: "Böhse Onkelz",
                cover: "img/covers/der-himmel-kann-warten.jpg",
                src: "songs/der-himmel-kann-warten.mp3",
                duration: "4:17"
            },
            {
                title: "Castle of Glass",
                artist: "Linkin Park",
                cover: "img/covers/castle-of-glass.jpg",
                src: "songs/castle-of-glass.mp3",
                duration: "3:25"
            },
            {
                title: "November Rain",
                artist: "Guns N' Roses",
                cover: "img/covers/november-rain.jfif",
                src: "songs/november-rain.mp3",
                duration: "9:00"
            },
            {
                title: "Back In Black",
                artist: "AC/DC",
                cover: "img/covers/back-in-black.jpg",
                src: "songs/back-in-black.mp3",
                duration: "4:11"
            },
            {
                title: "Perfect Strangers",
                artist: "Deep Purple",
                cover: "img/covers/perfect-strangers.jpg",
                src: "songs/perfect-strangers.mp3",
                duration: "5:24"
            },
            {
                title: "Rock and Roll",
                artist: "Led Zeppelin",
                cover: "img/covers/rock-and-roll.jpg",
                src: "songs/rock-and-roll.mp3",
                duration: "3:40"
            },
            {
                title: "Another Brick in the Wall",
                artist: "Pink Floyd",
                cover: "img/covers/another-brick-in-the-wall.webp",
                src: "songs/another-brick-in-the-wall.mp3",
                duration: "3:49"
            },
            {
                title: "New Divide",
                artist: "Linkin Park",
                cover: "img/covers/new-divide.jpg",
                src: "songs/new-divide.mp3",
                duration: "4:28"
            },
            {
                title: "Fade to Black",
                artist: "Metallica",
                cover: "img/covers/fade-to-black.jpg",
                src: "songs/fade-to-black.mp3",
                duration: "6:57"
            },
            {
                title: "Burn it to the Ground",
                artist: "Nickelback",
                cover: "img/covers/burn-it-to-the-ground.jpg",
                src: "songs/burn-it-to-the-ground.mp3",
                duration: "3:32"
            },
            {
                title: "Still Loving You",
                artist: "Scorpions",
                cover: "img/covers/still-loving-you.jpg",
                src: "songs/still-loving-you.mp3",
                duration: "4:47"
            },
            {
                title: "Everlong",
                artist: "Foo Fighters",
                cover: "img/covers/everlong.jpg",
                src: "songs/everlong.mp3",
                duration: "4:51"
            },
            {
                title: "Mr. Crowley",
                artist: "Ozzy Osbourne",
                cover: "img/covers/mr-crowley.jfif",
                src: "songs/mr-crowley.mp3",
                duration: "5:03"
            }
        ],
        edm: [
            {
                title: "Faded",
                artist: "Alan Walker",
                cover: "img/covers/faded.jpg",
                src: "songs/faded.mp4",
                duration: "3:31"
            },
            {
                title: "A Light That Never Comes",
                artist: "Linkin Park",
                cover: "img/covers/a-light-that-never-comes.jpg",
                src: "songs/a-light-that-never-comes.mp3",
                duration: "3:57"
            },
            {
                title: "Monsoon Hardstyle",
                artist: "VIZE",
                cover: "img/covers/monsoon.jpg",
                src: "songs/monsoon.mp3",
                duration: "2:55"
            },
            {
                title: "End The Lies",
                artist: "Basshunter",
                cover: "img/covers/end-the-lies.jpg",
                src: "songs/end-the-lies.mp3",
                duration: "2:46"
            },
            {
                title: "Everytime We Touch",
                artist: "Hardwell",
                cover: "img/covers/everytime-we-touch.jfif",
                src: "songs/everytime-we-touch.mp3",
                duration: "3:36"
            },
            {
                title: "Levels",
                artist: "Avicii",
                cover: "img/covers/levels.jpg",
                src: "songs/levels.mp3",
                duration: "3:18"
            },
            {
                title: "The Nights",
                artist: "Avicii",
                cover: "img/covers/the-nights.jfif",
                src: "songs/the-nights.mp3",
                duration: "3:10"
            },
            {
                title: "Wake Me Up",
                artist: "Avicii",
                cover: "img/covers/wake-me-up.png",
                src: "songs/wake-me-up.mp3",
                duration: "4:32"
            },
            {
                title: "Stamp On The Ground",
                artist: "ItaloBrothers",
                cover: "img/covers/stamp-on-the-ground.jfif",
                src: "songs/stamp-on-the-ground.mp3",
                duration: "3:33"
            },
            {
                title: "She Wolf",
                artist: "David Guetta",
                cover: "img/covers/she-wolf.jpg",
                src: "songs/she-wolf.mp3",
                duration: "3:57"
            }
        ],
        relax: [
            {
                title: "Down By The River",
                artist: "Milky Chance",
                cover: "img/covers/down-by-the-river.jpg",
                src: "songs/down-by-the-river.mp3",
                duration: "3:49"
            },
            {
                title: "All Summer Long",
                artist: "Kid Rock",
                cover: "img/covers/all-summer-long.jpg",
                src: "songs/all-summer-long.mp3",
                duration: "3:48"
            },
            {
                title: "Cant Hold Us",
                artist: "Macklemore",
                cover: "img/covers/cant-hold-us.jpg",
                src: "songs/cant-hold-us.mp3",
                duration: "7:03"
            },
            {
                title: "Riptide",
                artist: "Vance Joy",
                cover: "img/covers/riptide.jfif",
                src: "songs/riptide.mp3",
                duration: "3:24"
            },
            {
                title: "Summer",
                artist: "Calvin Harris",
                cover: "img/covers/summer.jfif",
                src: "songs/summer.mp3",
                duration: "3:53"
            },
            {
                title: "Memories",
                artist: "David Guetta",
                cover: "img/covers/memories.jpg",
                src: "songs/memories.mp3",
                duration: "3:28"
            },
            {
                title: "Hymn for the Weekend",
                artist: "Coldplay",
                cover: "img/covers/hymn-for-the-weekend.jfif",
                src: "songs/hymn-for-the-weekend.mp3",
                duration: "4:20"
            },
            {
                title: "Lovers on the Sun",
                artist: "David Guetta",
                cover: "img/covers/lovers-on-the-sun.jfif",
                src: "songs/lovers-on-the-sun.mp3",
                duration: "3:43"
            },
            {
                title: "The Spectre",
                artist: "Alan Walker",
                cover: "img/covers/the-spectre.jfif",
                src: "songs/the-spectre.mp3",
                duration: "3:26"
            },
            {
                title: "Paradise",
                artist: "Coldplay",
                cover: "img/covers/paradise.jfif",
                src: "songs/paradise.mp3",
                duration: "4:20"
            }
        ],
        favoriten: JSON.parse(localStorage.getItem('favoriten')) || []
    };

    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.window > div');
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const coverImage = document.querySelector('.play-bar .cover img');
    const songTitle = document.querySelector('.play-bar .info .name');
    const songArtist = document.querySelector('.play-bar .info .artist');
    const currentTimeElement = document.querySelector('.play-bar .current-time');
    const durationElement = document.querySelector('.play-bar .duration');
    const progressBar = document.querySelector('.play-bar .progress-bar');
    const progress = document.querySelector('.play-bar .progress');
    const progressBarMobile = document.querySelector('.play-bar .progress-bar.mobile');
    const progressMobile = document.querySelector('.play-bar .progress-bar.mobile .progress');
    const favoriteButton = document.getElementById('add-favorite');
    const volumeControl = document.getElementById('volume-control');
    let currentPlaylist = [];
    let currentSongIndex = 0;
    let playingPlaylistName = '';
    let playingSong = null;

    // loads the clicked song into the playBar and updates its information
    function loadSong(song) {
        audioPlayer.src = song.src;
        coverImage.src = song.cover;
        coverImage.style.display = 'block'; // Show cover image
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        durationElement.textContent = song.duration;
        playingSong = song;
        localStorage.setItem('currentSong', JSON.stringify({
            song: song,
            playlist: playingPlaylistName,
            index: currentSongIndex
        })); // Save current song to localStorage

        highlightPlayingSong(); // Highlight the playing song in its playlist
        updatePlayingPlaylistIcon(); // Update the playing playlist icon

        // Ensure play button is updated correctly
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Set to play icon initially
        // Update favorite button state
        updateFavoriteButtonState();
    }

    // function to highlight the currently playing song in its playlist
    function highlightPlayingSong() {
        document.querySelectorAll('.playlist .songs a').forEach(link => {
            link.classList.remove('playing-song');
        });
        const playingPlaylist = document.querySelector(`.playlist.${playingPlaylistName} .songs`);
        if (playingPlaylist) {
            const playingLink = playingPlaylist.children[currentSongIndex];
            if (playingLink) {
                playingLink.classList.add('playing-song');
            }
        }
    }

    // function to update the playing playlist icon
    function updatePlayingPlaylistIcon() {
        document.querySelectorAll('.sidebar a').forEach(link => {
            link.classList.remove('playing');
        });
        const playingLink = document.querySelector(`.sidebar a[data-target="${playingPlaylistName}"]`);
        if (playingLink) {
            playingLink.classList.add('playing');
        }
    }

    // function to play the song and change the play button icon
    function playSong() {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

    // function to pause the song and change the play button icon
    function pauseSong() {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }

    // function to play the previous song in the playlist if there is one
    function prevSong() {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            loadSong(currentPlaylist[currentSongIndex]);
            playSong();
        }
    }

    // function to play the next song in the playlist if there is one
    function nextSong() {
        if (currentSongIndex < currentPlaylist.length - 1) {
            currentSongIndex++;
            loadSong(currentPlaylist[currentSongIndex]);
            playSong();
        }
    }

    //removes and re-adds the event listener to the song links to prevent multiple event listeners and use the updated songClickHandler
    function updateSongLinks() {
        const songLinks = document.querySelectorAll('.playlist .songs a');
        songLinks.forEach((songLink, index) => {
            songLink.removeEventListener('click', songClickHandler);
            songLink.addEventListener('click', songClickHandler);
        });
    }

    // function to handle the click on a song link
    function songClickHandler(e) {
        e.preventDefault(); // prevent the default behavior of the link (reload the page)
        const songLink = e.currentTarget; // get the clicked link
        const playlistClass = songLink.closest('.playlist').classList[1]; // get the class of the playlist of the clicked song link
        currentPlaylist = playlists[playlistClass];
        currentSongIndex = Array.from(songLink.closest('.songs').children).indexOf(songLink);
        playingPlaylistName = playlistClass;

        loadSong(currentPlaylist[currentSongIndex]);
        playSong();
    }

    // Add event listeners to the links (playlist names) in the sidebar
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // prevent the default behavior of the link (reload the page)
            const targetClass = link.getAttribute('data-target'); // each link has a data-target attribute that contains the class of the section that should be shown in the window

            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Hide all sections (playlists) in the window
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section with appropriate display style
            const targetSection = document.querySelector(`.${targetClass}`); // get the section with the class that is stored in the data-target attribute of the clicked link
            if (targetClass === 'home') {
                targetSection.style.display = 'flex';
            } else {
                targetSection.style.display = 'block';
            }

            // Load the playlist into the DOM
            if (targetClass in playlists) {
                currentPlaylist = playlists[targetClass];
                updateSongLinks();
            }

            // Hide the sidebar but only on smaller devices when a link is clicked
            if (window.innerWidth < 1250) {
                sidebar.style.display = 'none';
            }
        });
    });

    
    // Add event listeners to the mobile navbar links
    let mobileNavbarHomeLink = document.querySelector("#mobile-navbar-home-link")
    let mobileNavbarPlaylistsLink = document.querySelector("#mobile-navbar-playlists-link")
    const sidebar = document.querySelector('.sidebar');

    mobileNavbarHomeLink.addEventListener('click', (e) => {
        e.preventDefault(); // prevent the default behavior of the link (reload the page)
        
        // Remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));
        
        // Hide all sections (playlists) in the window
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the home section with appropriate display style
        const targetClass = mobileNavbarHomeLink.getAttribute('data-target');
        const targetSection = document.querySelector(`.${targetClass}`);
        targetSection.style.display = 'flex';
        sidebar.style.display = 'none';

        // Load the playlist into the DOM
        if (targetClass in playlists) {
            currentPlaylist = playlists[targetClass];
            updateSongLinks();
        }
    });

    mobileNavbarPlaylistsLink.addEventListener('click', (e) => {
        e.preventDefault(); // prevent the default behavior of the link (reload the page)
        sidebar.style.display = 'flex';
    });

    // Initial call to update song links
    updateSongLinks();

    // Add event listeners to the play, prev and next buttons and add its function
    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });
    prevButton.addEventListener('click', () => {
        if (playingPlaylistName) {
            currentPlaylist = playlists[playingPlaylistName];
            prevSong();
        }
    });
    nextButton.addEventListener('click', () => {
        if (playingPlaylistName) {
            currentPlaylist = playlists[playingPlaylistName];
            nextSong();
        }
    });

    // Add event listeners to the audioPlayer to update the progress bar and the current time in our playBar
    audioPlayer.addEventListener('timeupdate', () => { // timeupdate event triggers every time the time of the audioPlayer changes
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const progressPercent = (currentTime / duration) * 100; // calculates the percentage of how much of the song has been played
        progress.style.width = `${progressPercent}%`; // sets the width of the progress bar to the calculated percentage
        progressMobile.style.width = `${progressPercent}%`; // sets the width of the progress bar to the calculated percentage

        let minutes = Math.floor(currentTime / 60); // converts the current time in seconds to minutes
        let seconds = Math.floor(currentTime % 60); // calculates the remaining seconds after converting to minutes
        if (seconds < 10) { // if the seconds are less than 10 a 0 will be added in front of the number for styling reasons
            seconds = `0${seconds}`;
        }
        currentTimeElement.textContent = `${minutes}:${seconds}`; // sets the current time in minutes and seconds to the currentTimeElement in the playBar
    });

    // Add event listener to the progress bar to change the current time of the song when clicked
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    });

    progressBarMobile.addEventListener('click', (e) => {
        const width = progressBarMobile.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    });

    // Add event listeners to the audioPlayer to play the next song when the current song has ended
    audioPlayer.addEventListener('ended', nextSong);

    // Add event listener to the favorite button (heart) to add the current song to the favorites playlist
    favoriteButton.addEventListener('click', () => {
        if (playingSong) {
            const isFavorite = playlists.favoriten.some(song => song.src === playingSong.src);
            favoriteButton.classList.add('animated'); // plays animation if the heart is clicked
            setTimeout(() => {  // removes the animation class after 600ms
                favoriteButton.classList.remove('animated');
            }, 600);

            if (!isFavorite) {
                playlists.favoriten.push(playingSong);
                localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten)); // saves the favorites playlist to localStorage
                favoriteButton.classList.add('favorited'); // changes the color of the heart to red
            } else {
                playlists.favoriten = playlists.favoriten.filter(song => song.src !== playingSong.src); // filters out the song that should be removed by comparing the src of the song
                localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten)); // saves the updated favorites playlist to localStorage
                favoriteButton.classList.remove('favorited'); // removes the red color from the heart
            }
            updateFavoritePlaylist(); // updates the html content of the favorite playlist
        }
    });

    // Add event listener to the volume control icon to mute/unmute the audioPlayer
    volumeControl.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted; // toggles the muted state of the audioPlayer
        // changes the icon of the volume control depending on the audioPlayer state
        if (audioPlayer.muted) {
            volumeControl.classList.remove('fa-volume-high');
            volumeControl.classList.add('fa-volume-mute');
        } else {
            volumeControl.classList.remove('fa-volume-mute');
            volumeControl.classList.add('fa-volume-high');
        }
    });

    // Updates the favorite button state depending on if the current song is in the favorites playlist
    function updateFavoriteButtonState() {
        if (playingSong) {
            const isFavorite = playlists.favoriten.some(song => song.src === playingSong.src);
            if (isFavorite) {
                favoriteButton.classList.add('favorited');
            } else {
                favoriteButton.classList.remove('favorited');
            }
        } else {
            favoriteButton.classList.remove('favorited');
        }
    }

    // updates the favorite playlist html in the DOM
    function updateFavoritePlaylist() {
        const favoritePlaylist = document.querySelector('.playlist.favoriten .songs');
        favoritePlaylist.innerHTML = '';

        playlists.favoriten.forEach((song, index) => {
            const songElement = document.createElement('a');
            songElement.href = '#';
            songElement.innerHTML = `
                <span>${index + 1}</span>
                <img src="${song.cover}" alt="${song.title}">
                <span>${song.title}</span>
                <span>${song.artist}</span>
                <span>${song.duration}</span>
                <i class="fas fa-times remove-song"></i>
            `;
            favoritePlaylist.appendChild(songElement); // adds the created a element to the favorite playlist in the html
        });

        // Add event listener to the remove buttons of each song in the favorites playlist
        const removeButtons = document.querySelectorAll('.remove-song');
        removeButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // prevents the click event on remove Button (X) from triggering the parent element (a tag) click event handler and playing the song when we want to delete it
                removeFavoriteSong(index);
            });
        });

        updateSongLinks();
    }

    function removeFavoriteSong(index) {
        const removedSong = playlists.favoriten[index]; // gets the song that should be removed by its index
        playlists.favoriten.splice(index, 1); // removes the song from the favorites array by splicing it out by its index
        localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten)); // saves the updated favorites playlist to localStorage
        updateFavoritePlaylist(); // updates the html content of the favorite playlist
        // If the removed song is the currently playing song in the playBar, update the favorite button state (delete the red color from the heart)
        if (playingSong && playingSong.src === removedSong.src) {
            updateFavoriteButtonState();
        }
    }

    // Load the currentSong (last played) from localStorage 
    const savedSong = JSON.parse(localStorage.getItem('currentSong'));
    // if available
    if (savedSong) {
        playingPlaylistName = savedSong.playlist;
        currentPlaylist = playlists[playingPlaylistName];
        currentSongIndex = savedSong.index;
        loadSong(savedSong.song);
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Set to play icon on page load
    }

    // Adds a MutationObserver to the playlists to update the song links when the playlist changes
    document.querySelectorAll('.window .playlist').forEach(playlist => {
        const observer = new MutationObserver(updateSongLinks); // creates a new MutationObserver that calls the updateSongLinks function when a mutation is detected
        observer.observe(playlist, { childList: true, subtree: true }); // observes the playlist and all its children for changes
    });

    // Initial load of the favorite playlist
    updateFavoritePlaylist();
});