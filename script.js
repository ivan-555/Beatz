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
    const favoriteButton = document.getElementById('add-favorite');
    const volumeControl = document.getElementById('volume-control');
    let currentPlaylist = [];
    let currentSongIndex = 0;
    let playingPlaylistName = '';
    let playingSong = null;

    function loadSong(song) {
        console.log("Loading song:", song);
        audioPlayer.src = song.src;
        coverImage.src = song.cover;
        coverImage.style.display = 'block'; // Show cover image
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        durationElement.textContent = song.duration;
        playingSong = song;
        localStorage.setItem('currentSong', JSON.stringify(song)); // Save current song to localStorage

        // Ensure play button is updated correctly
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        // Update favorite button state
        updateFavoriteButtonState();
    }

    function playSong() {
        audioPlayer.play().then(() => {
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(error => {
            console.error("Error playing song:", error);
        });
    }

    function pauseSong() {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }

    function prevSong() {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            loadSong(currentPlaylist[currentSongIndex]);
            playSong();
        }
    }

    function nextSong() {
        if (currentSongIndex < currentPlaylist.length - 1) {
            currentSongIndex++;
            loadSong(currentPlaylist[currentSongIndex]);
            playSong();
        }
    }

    function updateSongLinks() {
        const songLinks = document.querySelectorAll('.playlist .songs a');
        songLinks.forEach((songLink, index) => {
            songLink.removeEventListener('click', songClickHandler); // Remove existing listener
            songLink.addEventListener('click', songClickHandler); // Add new listener
        });
    }

    function songClickHandler(e) {
        e.preventDefault();
        const songLink = e.currentTarget;
        const playlistClass = songLink.closest('.playlist').classList[1];
        currentPlaylist = playlists[playlistClass];
        currentSongIndex = Array.from(songLink.closest('.songs').children).indexOf(songLink);
        playingPlaylistName = playlistClass;

        // Check if song is defined
        if (currentPlaylist[currentSongIndex]) {
            console.log("Song clicked:", currentPlaylist[currentSongIndex]);
            // Set the audio source and play the song
            loadSong(currentPlaylist[currentSongIndex]);
            playSong();
        } else {
            console.error("Song not found in playlist:", playlistClass, "Index:", currentSongIndex);
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetClass = link.getAttribute('data-target');
            console.log("Playlist clicked:", targetClass);

            // Remove 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section with appropriate display style
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetClass === 'home') {
                targetSection.style.display = 'flex';
            } else {
                targetSection.style.display = 'block';
            }

            // Load the playlist but do not play any song
            if (targetClass in playlists) {
                currentPlaylist = playlists[targetClass];
                currentSongIndex = 0;
                console.log("Loaded playlist:", currentPlaylist);
                updateSongLinks();
            }
        });
    });

    // Initial call to update song links
    updateSongLinks();

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

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        currentTimeElement.textContent = `${minutes}:${seconds}`;
    });

    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    });

    audioPlayer.addEventListener('ended', nextSong);

    favoriteButton.addEventListener('click', () => {
        if (playingSong) {
            // Check if the song is already in the favorites playlist
            const isFavorite = playlists.favoriten.some(song => song.src === playingSong.src);
            favoriteButton.classList.add('animated');
            setTimeout(() => {
                favoriteButton.classList.remove('animated');
            }, 600);

            if (!isFavorite) {
                playlists.favoriten.push(playingSong);
                localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten));
                favoriteButton.classList.add('favorited');
                console.log("Song added to favorites:", playingSong);
            } else {
                playlists.favoriten = playlists.favoriten.filter(song => song.src !== playingSong.src);
                localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten));
                favoriteButton.classList.remove('favorited');
                console.log("Song removed from favorites:", playingSong);
            }
            updateFavoritePlaylist();
        }
    });

    volumeControl.addEventListener('click', () => {
        audioPlayer.muted = !audioPlayer.muted;
        if (audioPlayer.muted) {
            volumeControl.classList.remove('fa-volume-high');
            volumeControl.classList.add('fa-volume-mute');
        } else {
            volumeControl.classList.remove('fa-volume-mute');
            volumeControl.classList.add('fa-volume-high');
        }
    });

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
            favoritePlaylist.appendChild(songElement);
        });

        // Add event listeners for removing songs
        const removeButtons = document.querySelectorAll('.remove-song');
        removeButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                removeFavoriteSong(index);
            });
        });

        updateSongLinks();
    }

    function removeFavoriteSong(index) {
        const removedSong = playlists.favoriten[index];
        playlists.favoriten.splice(index, 1);
        localStorage.setItem('favoriten', JSON.stringify(playlists.favoriten));
        updateFavoritePlaylist();
        if (playingSong && playingSong.src === removedSong.src) {
            updateFavoriteButtonState();
        }
    }

    // Load the current song from localStorage if available
    const savedSong = JSON.parse(localStorage.getItem('currentSong'));
    if (savedSong) {
        loadSong(savedSong);
    }

    // Ensure song links are updated whenever new songs are loaded
    document.querySelectorAll('.window .playlist').forEach(playlist => {
        const observer = new MutationObserver(updateSongLinks);
        observer.observe(playlist, { childList: true, subtree: true });
    });

    // Initial load of the favorite playlist
    updateFavoritePlaylist();
});
