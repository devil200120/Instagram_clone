// Instagram Clone 2025 - Advanced Features
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    const app = new InstagramApp();
});

class InstagramApp {
    constructor() {
        // Current user data
        this.currentUser = {
            id: 1,
            username: 'sarah_photographer',
            fullName: 'Sarah Johnson',
            profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c7?w=150&h=150&fit=crop&crop=face'
        };
        
        // App data - typically this would come from API but using static data for the demo
        this.data = {
            users: [
                {
                    id: 1,
                    username: "sarah_photographer",
                    fullName: "Sarah Johnson",
                    bio: "📸 Travel photographer | 🌍 Currently in Tokyo | 📧 hello@sarah.photo",
                    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b1c7?w=150&h=150&fit=crop&crop=face",
                    followers: 45280,
                    following: 892,
                    posts: 1247,
                    verified: true,
                    isPrivate: false,
                    hasStories: true,
                    isOnline: true
                },
                {
                    id: 2,
                    username: "alex_dev",
                    fullName: "Alex Chen",
                    bio: "💻 Full-stack developer | 🚀 Building the future | 🎮 Gaming enthusiast",
                    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    followers: 12850,
                    following: 445,
                    posts: 623,
                    verified: false,
                    isPrivate: false,
                    hasStories: true,
                    isOnline: false
                },
                {
                    id: 3,
                    username: "maria_chef",
                    fullName: "Maria Rodriguez",
                    bio: "👩‍🍳 Chef & Food blogger | 🍝 Italian cuisine specialist | 📍 NYC",
                    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    followers: 89420,
                    following: 1205,
                    posts: 2156,
                    verified: true,
                    isPrivate: false,
                    hasStories: true,
                    isOnline: true
                },
                {
                    id: 4,
                    username: "fitness_mike",
                    fullName: "Mike Thompson",
                    bio: "💪 Personal trainer | 🏋️ Fitness coach | 🥗 Nutrition expert | DM for coaching",
                    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                    followers: 67890,
                    following: 567,
                    posts: 1834,
                    verified: false,
                    isPrivate: false,
                    hasStories: false,
                    isOnline: true
                },
                {
                    id: 5,
                    username: "travel_emma",
                    fullName: "Emma Wilson",
                    bio: "✈️ Travel blogger | 🗺️ 47 countries & counting | 📱 Content creator",
                    profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
                    followers: 156700,
                    following: 2340,
                    posts: 3421,
                    verified: true,
                    isPrivate: false,
                    hasStories: true,
                    isOnline: false
                }
            ],
            posts: [
                {
                    id: 1,
                    userId: 1,
                    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=625&fit=crop",
                    caption: "Golden hour magic in Tokyo 🌅 The city never stops amazing me with its beauty. This view from the observation deck was absolutely breathtaking! #Tokyo #GoldenHour #Photography #Travel",
                    likes: 2847,
                    comments: 156,
                    shares: 45,
                    saves: 234,
                    timestamp: "2 hours ago",
                    location: "Tokyo, Japan",
                    isLiked: false,
                    isSaved: false,
                    aspectRatio: "4:5"
                },
                {
                    id: 2,
                    userId: 2,
                    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=625&fit=crop",
                    caption: "Late night coding session 💻 Working on something exciting! Can't wait to share it with you all. #coding #development #javascript #programming",
                    likes: 892,
                    comments: 67,
                    shares: 23,
                    saves: 145,
                    timestamp: "4 hours ago",
                    location: "San Francisco, CA",
                    isLiked: true,
                    isSaved: false,
                    aspectRatio: "4:5"
                },
                {
                    id: 3,
                    userId: 3,
                    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=625&fit=crop",
                    caption: "Fresh pasta making class today! 🍝 Nothing beats the satisfaction of making pasta from scratch. Recipe coming soon to my blog! #pasta #cooking #italian #foodie",
                    likes: 4521,
                    comments: 289,
                    shares: 78,
                    saves: 567,
                    timestamp: "6 hours ago",
                    location: "Little Italy, NYC",
                    isLiked: false,
                    isSaved: true,
                    aspectRatio: "4:5"
                },
                {
                    id: 4,
                    userId: 4,
                    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=625&fit=crop",
                    caption: "Morning workout complete! 💪 Remember, consistency is key. Small steps every day lead to big results. What's your fitness goal for this week? #fitness #motivation #workout #health",
                    likes: 1567,
                    comments: 98,
                    shares: 34,
                    saves: 201,
                    timestamp: "8 hours ago",
                    location: "Downtown Gym",
                    isLiked: true,
                    isSaved: false,
                    aspectRatio: "4:5"
                },
                {
                    id: 5,
                    userId: 5,
                    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=625&fit=crop",
                    caption: "Exploring hidden gems in Santorini 🏛️ The architecture here is simply stunning. Every corner tells a story. Can't wait to share more from this incredible trip! #Santorini #Greece #Travel #Architecture",
                    likes: 7892,
                    comments: 456,
                    shares: 123,
                    saves: 891,
                    timestamp: "12 hours ago",
                    location: "Santorini, Greece",
                    isLiked: false,
                    isSaved: true,
                    aspectRatio: "4:5"
                }
            ],
            stories: [
                {
                    userId: 1,
                    username: "sarah_photographer",
                    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b1c7?w=150&h=150&fit=crop&crop=face",
                    stories: [
                        {
                            id: 1,
                            imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=600&fit=crop",
                            duration: 5000, // 5 seconds for demo purposes
                            timestamp: "2 hours ago",
                            viewed: false
                        },
                        {
                            id: 2,
                            imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop",
                            duration: 5000,
                            timestamp: "3 hours ago",
                            viewed: false
                        }
                    ]
                },
                {
                    userId: 2,
                    username: "alex_dev",
                    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                    stories: [
                        {
                            id: 3,
                            imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
                            duration: 5000,
                            timestamp: "1 hour ago",
                            viewed: true
                        }
                    ]
                },
                {
                    userId: 3,
                    username: "maria_chef",
                    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                    stories: [
                        {
                            id: 4,
                            imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=600&fit=crop",
                            duration: 5000,
                            timestamp: "30 minutes ago",
                            viewed: false
                        }
                    ]
                }
            ],
            messages: [
                {
                    id: 1,
                    senderId: 1,
                    receiverId: 2,
                    content: "Hey! Loved your latest post about the coding project 💻",
                    timestamp: "10:30 AM",
                    isRead: true,
                    messageType: "text"
                },
                {
                    id: 2,
                    senderId: 2,
                    receiverId: 1,
                    content: "Thanks! Your Tokyo photos are incredible 📸",
                    timestamp: "10:32 AM",
                    isRead: true,
                    messageType: "text"
                },
                {
                    id: 3,
                    senderId: 3,
                    receiverId: 1,
                    content: "🎵 Check out this song!",
                    timestamp: "2:15 PM",
                    isRead: false,
                    messageType: "music",
                    musicTitle: "Lofi Hip Hop",
                    musicArtist: "Chill Beats"
                }
            ],
            notifications: [
                {
                    id: 1,
                    type: "like",
                    username: "alex_dev",
                    action: "liked your photo",
                    timestamp: "5 minutes ago",
                    isRead: false
                },
                {
                    id: 2,
                    type: "comment",
                    username: "maria_chef",
                    action: "commented on your post",
                    timestamp: "15 minutes ago",
                    isRead: false
                },
                {
                    id: 3,
                    type: "follow",
                    username: "fitness_mike",
                    action: "started following you",
                    timestamp: "1 hour ago",
                    isRead: true
                }
            ]
        };
        
        // App state variables
        this.currentStoryIndex = 0;
        this.currentStorySet = null;
        this.storyTimer = null;
        this.isLoading = false;
        this.hasMorePosts = true;
        this.currentChatUser = null;
        
        // Initialize the app
        this.init();
    }
    
    init() {
        // Show loading screen on app launch
        this.showLoadingScreen();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Load initial content
        this.loadInitialContent();
        
        // Set up intersection observer for infinite scroll
        this.setupIntersectionObserver();
    }
    
    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const app = document.getElementById('app');
        
        // Show loading screen for 2 seconds then fade to main app
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                app.classList.remove('hidden');
            }, 500);
        }, 2000);
    }
    
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                if (section) {
                    this.navigateToSection(section);
                }
            });
        });
        
        // Create button
        document.getElementById('create-btn').addEventListener('click', () => {
            this.openCreateModal();
        });
        
        // Notifications
        document.getElementById('notifications-btn').addEventListener('click', () => {
            this.toggleNotifications();
        });
        
        // Messages header button
        document.getElementById('messages-header-btn').addEventListener('click', () => {
            this.navigateToSection('messages');
        });
        
        // Story modal close button
        document.getElementById('story-close-btn').addEventListener('click', () => {
            this.closeStoryModal();
        });
        
        // Story navigation
        document.getElementById('story-prev').addEventListener('click', () => {
            this.previousStory();
        });
        
        document.getElementById('story-next').addEventListener('click', () => {
            this.nextStory();
        });
        
        // Create modal
        document.getElementById('create-cancel').addEventListener('click', () => {
            this.closeCreateModal();
        });
        
        document.getElementById('create-share').addEventListener('click', () => {
            this.sharePost();
        });
        
        // Chat modal
        document.getElementById('chat-back-btn').addEventListener('click', () => {
            this.closeChatModal();
        });
        
        document.getElementById('send-btn').addEventListener('click', () => {
            this.sendMessage();
        });
        
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Notifications panel close
        document.getElementById('notifications-close').addEventListener('click', () => {
            this.closeNotifications();
        });
        
        // Double tap detection for mobile
        this.setupDoubleTapDetection();
    }
    
    setupDoubleTapDetection() {
        let lastTap = 0;
        
        // Monitor touch events for double-tap
        document.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 500 && tapLength > 0) {
                const target = e.target.closest('.post-image');
                if (target) {
                    e.preventDefault();
                    const postId = parseInt(target.closest('.post').dataset.postId);
                    this.toggleLike(postId, true);
                }
            }
            
            lastTap = currentTime;
        });
    }
    
    loadInitialContent() {
        // Render all sections
        this.renderStories();
        this.renderPosts();
        this.renderMessages();
        this.renderProfile();
        this.renderExplore();
        this.renderNotifications();
    }
    
    navigateToSection(section) {
        // Update navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeNav = document.querySelector(`.nav-btn[data-section="${section}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }
        
        // Update content sections
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        document.getElementById(`${section}-section`).classList.add('active');
    }
    
    renderStories() {
        const storiesList = document.getElementById('stories-list');
        storiesList.innerHTML = '';
        
        // Add your story first
        const yourStoryItem = document.createElement('div');
        yourStoryItem.className = 'story-item';
        yourStoryItem.innerHTML = `
            <div class="story-ring">
                <img src="${this.currentUser.profileImage}" alt="Your Story" class="story-avatar">
            </div>
            <span class="story-username">Your Story</span>
        `;
        storiesList.appendChild(yourStoryItem);
        
        // Add other users' stories
        this.data.stories.forEach(userStories => {
            // Skip current user's story since we already added it
            if (userStories.userId === this.currentUser.id) return;
            
            const hasUnviewed = userStories.stories.some(s => !s.viewed);
            
            const storyItem = document.createElement('div');
            storyItem.className = 'story-item';
            storyItem.dataset.userId = userStories.userId;
            storyItem.addEventListener('click', () => this.openStoryModal(userStories));
            
            storyItem.innerHTML = `
                <div class="story-ring ${hasUnviewed ? '' : 'viewed'}">
                    <img src="${userStories.profileImage}" alt="${userStories.username}" class="story-avatar">
                </div>
                <span class="story-username">${userStories.username}</span>
            `;
            
            storiesList.appendChild(storyItem);
        });
    }
    
    renderPosts() {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';
        
        this.data.posts.forEach(post => {
            const user = this.data.users.find(u => u.id === post.userId);
            const postElement = this.createPostElement(post, user);
            postsContainer.appendChild(postElement);
        });
    }
    
    createPostElement(post, user) {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.dataset.postId = post.id;
        
        postDiv.innerHTML = `
            <div class="post-header">
                <img src="${user.profileImage}" alt="${user.username}" class="post-avatar">
                <div class="post-user-info">
                    <div class="post-username">${user.username}${user.verified ? ' ✓' : ''}</div>
                    ${post.location ? `<div class="post-location">${post.location}</div>` : ''}
                </div>
                <button class="post-options">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="5" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                    </svg>
                </button>
            </div>
            <div class="post-image-container">
                <img src="${post.imageUrl}" alt="Post by ${user.username}" class="post-image">
            </div>
            <div class="post-actions">
                <div class="post-actions-left">
                    <button class="action-btn like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="action-btn comment-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </button>
                    <button class="action-btn share-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"/>
                            <circle cx="6" cy="12" r="3"/>
                            <circle cx="18" cy="19" r="3"/>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                    </button>
                </div>
                <button class="action-btn save-btn ${post.isSaved ? 'saved' : ''}" data-post-id="${post.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <polygon points="19 21 12 16 5 21 5 5 19 5 19 21"/>
                    </svg>
                </button>
            </div>
            <div class="post-likes">${this.formatNumber(post.likes)} likes</div>
            <div class="post-caption">
                <span class="post-caption-username">${user.username}</span>
                ${post.caption}
            </div>
            ${post.comments > 0 ? `<div class="post-comments">View all ${post.comments} comments</div>` : ''}
            <div class="post-timestamp">${post.timestamp}</div>
        `;
        
        // Add event listeners for post interactions
        const likeBtn = postDiv.querySelector('.like-btn');
        const saveBtn = postDiv.querySelector('.save-btn');
        const postImage = postDiv.querySelector('.post-image');
        
        likeBtn.addEventListener('click', () => this.toggleLike(post.id));
        saveBtn.addEventListener('click', () => this.toggleSave(post.id));
        
        // Double-click for desktop
        postImage.addEventListener('dblclick', () => this.toggleLike(post.id, true));
        
        return postDiv;
    }
    
    toggleLike(postId, showAnimation = false) {
        const post = this.data.posts.find(p => p.id === postId);
        if (!post) return;
        
        const postElement = document.querySelector(`.post[data-post-id="${postId}"]`);
        if (!postElement) return;
        
        const likeBtn = postElement.querySelector('.like-btn');
        const likeBtnSvg = likeBtn.querySelector('svg');
        const likesCount = postElement.querySelector('.post-likes');
        
        // Toggle like state
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        
        // Update UI
        likeBtn.classList.toggle('liked', post.isLiked);
        likeBtnSvg.setAttribute('fill', post.isLiked ? 'currentColor' : 'none');
        likesCount.textContent = `${this.formatNumber(post.likes)} likes`;
        
        // Show heart animation if requested
        if (showAnimation && post.isLiked) {
            this.showHeartAnimation(postElement.querySelector('.post-image'));
        }
    }
    
    toggleSave(postId) {
        const post = this.data.posts.find(p => p.id === postId);
        if (!post) return;
        
        const postElement = document.querySelector(`.post[data-post-id="${postId}"]`);
        if (!postElement) return;
        
        const saveBtn = postElement.querySelector('.save-btn');
        const saveBtnSvg = saveBtn.querySelector('svg');
        
        // Toggle saved state
        post.isSaved = !post.isSaved;
        
        // Update UI
        saveBtn.classList.toggle('saved', post.isSaved);
        saveBtnSvg.setAttribute('fill', post.isSaved ? 'currentColor' : 'none');
    }
    
    showHeartAnimation(targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Create heart elements
        for (let i = 0; i < 5; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = `${centerX}px`;
            heart.style.top = `${centerY}px`;
            
            // Random position offsets
            const offsetX = Math.random() * 40 - 20;
            const offsetY = -Math.random() * 50 - 30;
            
            heart.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${0.8 + Math.random() * 0.4})`;
            heart.style.opacity = '0';
            heart.style.transition = `transform 1s ease-out, opacity 1s ease-out`;
            
            document.getElementById('heart-animation-container').appendChild(heart);
            
            // Trigger animation
            setTimeout(() => {
                heart.style.opacity = '1';
            }, 10);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    }
    
    openStoryModal(userStories) {
        this.currentStorySet = userStories;
        this.currentStoryIndex = 0;
        
        const modal = document.getElementById('story-modal');
        modal.classList.add('active');
        
        this.showCurrentStory();
    }
    
    showCurrentStory() {
        if (!this.currentStorySet || this.currentStoryIndex >= this.currentStorySet.stories.length) {
            this.closeStoryModal();
            return;
        }
        
        const story = this.currentStorySet.stories[this.currentStoryIndex];
        
        // Update UI
        document.getElementById('story-avatar').src = this.currentStorySet.profileImage;
        document.getElementById('story-username').textContent = this.currentStorySet.username;
        document.getElementById('story-time').textContent = story.timestamp;
        
        const storyImage = document.getElementById('story-image');
        storyImage.src = story.imageUrl;
        
        // Preload next image if available
        if (this.currentStoryIndex < this.currentStorySet.stories.length - 1) {
            const nextStory = this.currentStorySet.stories[this.currentStoryIndex + 1];
            const preloadImage = new Image();
            preloadImage.src = nextStory.imageUrl;
        }
        
        // Update progress bars
        this.updateStoryProgress();
        
        // Mark as viewed
        story.viewed = true;
        
        // Clear previous timer
        if (this.storyTimer) {
            clearTimeout(this.storyTimer);
        }
        
        // Set auto-advance timer
        this.storyTimer = setTimeout(() => {
            this.nextStory();
        }, story.duration);
    }
    
    updateStoryProgress() {
        const progressContainer = document.getElementById('story-progress-bars');
        progressContainer.innerHTML = '';
        
        // Create a progress bar for each story
        this.currentStorySet.stories.forEach((story, index) => {
            const progressBar = document.createElement('div');
            progressBar.className = 'story-progress-bar';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'story-progress-fill';
            
            if (index < this.currentStoryIndex) {
                // Stories before current one should be fully filled
                progressFill.style.width = '100%';
            } else if (index === this.currentStoryIndex) {
                // Current story should animate from 0% to 100%
                progressFill.style.width = '0%';
                
                // Using requestAnimationFrame to ensure smooth animation
                requestAnimationFrame(() => {
                    progressFill.style.transition = `width ${story.duration}ms linear`;
                    progressFill.style.width = '100%';
                });
            } else {
                // Future stories should be empty
                progressFill.style.width = '0%';
            }
            
            progressBar.appendChild(progressFill);
            progressContainer.appendChild(progressBar);
        });
    }
    
    nextStory() {
        if (this.currentStoryIndex < this.currentStorySet.stories.length - 1) {
            this.currentStoryIndex++;
            this.showCurrentStory();
        } else {
            // Move to next user's stories or close if this was the last user
            this.closeStoryModal();
        }
    }
    
    previousStory() {
        if (this.currentStoryIndex > 0) {
            this.currentStoryIndex--;
            this.showCurrentStory();
        }
    }
    
    closeStoryModal() {
        const modal = document.getElementById('story-modal');
        modal.classList.remove('active');
        
        // Clear timer
        if (this.storyTimer) {
            clearTimeout(this.storyTimer);
            this.storyTimer = null;
        }
        
        // Reset state
        this.currentStorySet = null;
        this.currentStoryIndex = 0;
        
        // Update stories display to reflect viewed status
        this.renderStories();
    }
    
    openCreateModal() {
        const modal = document.getElementById('create-modal');
        modal.classList.add('active');
    }
    
    closeCreateModal() {
        const modal = document.getElementById('create-modal');
        modal.classList.remove('active');
        
        // Reset form
        document.getElementById('image-upload-area').classList.remove('hidden');
        document.getElementById('create-form').classList.add('hidden');
        document.getElementById('caption-textarea').value = '';
        document.getElementById('location-input').value = '';
    }
    
    sharePost() {
        const caption = document.getElementById('caption-textarea').value;
        const location = document.getElementById('location-input').value;
        
        // Create new post object
        const newPost = {
            id: Date.now(),
            userId: this.currentUser.id,
            imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=625&fit=crop",
            caption: caption || "New post! 📸",
            likes: 0,
            comments: 0,
            shares: 0,
            saves: 0,
            timestamp: "Just now",
            location: location || null,
            isLiked: false,
            isSaved: false,
            aspectRatio: "4:5"
        };
        
        // Add to data and update UI
        this.data.posts.unshift(newPost);
        this.renderPosts();
        this.closeCreateModal();
        
        // Show success toast
        this.showToast('Post shared successfully!');
    }
    
    renderMessages() {
        const messagesList = document.getElementById('messages-list');
        messagesList.innerHTML = '';
        
        // Group messages by user
        const conversations = new Map();
        
        this.data.messages.forEach(message => {
            const otherUserId = message.senderId === this.currentUser.id ? message.receiverId : message.senderId;
            
            if (!conversations.has(otherUserId)) {
                const otherUser = this.data.users.find(u => u.id === otherUserId);
                
                conversations.set(otherUserId, {
                    user: otherUser,
                    messages: [],
                    lastMessage: null,
                    unreadCount: 0
                });
            }
            
            const conversation = conversations.get(otherUserId);
            conversation.messages.push(message);
            conversation.lastMessage = message;
            
            if (!message.isRead && message.receiverId === this.currentUser.id) {
                conversation.unreadCount++;
            }
        });
        
        // Render conversations
        conversations.forEach(conversation => {
            const messageItem = document.createElement('div');
            messageItem.className = 'message-item';
            messageItem.addEventListener('click', () => this.openChat(conversation.user));
            
            messageItem.innerHTML = `
                <img src="${conversation.user.profileImage}" alt="${conversation.user.username}" class="message-avatar">
                <div class="message-info">
                    <div class="message-username">${conversation.user.username}</div>
                    <div class="message-preview">${this.getMessagePreview(conversation.lastMessage)}</div>
                </div>
                <div class="message-time">${conversation.lastMessage.timestamp}</div>
                ${conversation.unreadCount > 0 ? '<div class="message-unread"></div>' : ''}
            `;
            
            messagesList.appendChild(messageItem);
        });
    }
    
    getMessagePreview(message) {
        if (message.messageType === 'text') {
            return message.content.length > 30 ? message.content.substring(0, 30) + '...' : message.content;
        } else if (message.messageType === 'music') {
            return `${message.content} ${message.musicTitle} - ${message.musicArtist}`;
        }
        return message.content;
    }
    
    openChat(user) {
        this.currentChatUser = user;
        const modal = document.getElementById('chat-modal');
        modal.classList.add('active');
        
        // Update chat header
        document.getElementById('chat-avatar').src = user.profileImage;
        document.getElementById('chat-username').textContent = user.username;
        document.getElementById('chat-status').textContent = user.isOnline ? 'Active now' : 'Last seen recently';
        
        this.renderChatMessages();
    }
    
    renderChatMessages() {
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.innerHTML = '';
        
        if (!this.currentChatUser) return;
        
        // Filter messages for current chat
        const messages = this.data.messages.filter(m => 
            (m.senderId === this.currentUser.id && m.receiverId === this.currentChatUser.id) ||
            (m.senderId === this.currentChatUser.id && m.receiverId === this.currentUser.id)
        );
        
        // Mark messages as read
        messages.forEach(m => {
            if (m.senderId === this.currentChatUser.id && !m.isRead) {
                m.isRead = true;
            }
        });
        
        // Sort by timestamp (assuming they're in order already, but just to be safe)
        messages.sort((a, b) => {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
        
        // Render messages
        messages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${message.senderId === this.currentUser.id ? 'sent' : 'received'}`;
            
            if (message.messageType === 'music') {
                messageDiv.innerHTML = `
                    ${message.content}<br>
                    <strong>${message.musicTitle}</strong> - ${message.musicArtist}
                `;
            } else {
                messageDiv.textContent = message.content;
            }
            
            chatMessages.appendChild(messageDiv);
        });
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    sendMessage() {
        const input = document.getElementById('chat-input');
        const content = input.value.trim();
        
        if (content && this.currentChatUser) {
            // Create new message
            const newMessage = {
                id: Date.now(),
                senderId: this.currentUser.id,
                receiverId: this.currentChatUser.id,
                content: content,
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                isRead: false,
                messageType: "text"
            };
            
            // Add to data and update UI
            this.data.messages.push(newMessage);
            this.renderChatMessages();
            this.renderMessages(); // Update the message list too
            
            // Clear input
            input.value = '';
            
            // Simulate typing indicator and response
            this.simulateResponse();
        }
    }
    
    simulateResponse() {
        // Create typing indicator
        const chatMessages = document.getElementById('chat-messages');
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat-message received typing-indicator';
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate typing delay and response
        setTimeout(() => {
            typingIndicator.remove();
            
            const responses = [
                "Thanks for the message! 😊",
                "That's awesome! 🎉",
                "I'll check it out and get back to you",
                "Good to hear from you!",
                "Let's catch up soon!"
            ];
            
            const response = responses[Math.floor(Math.random() * responses.length)];
            
            const responseMessage = {
                id: Date.now(),
                senderId: this.currentChatUser.id,
                receiverId: this.currentUser.id,
                content: response,
                timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                isRead: true,
                messageType: "text"
            };
            
            this.data.messages.push(responseMessage);
            this.renderChatMessages();
            this.renderMessages();
        }, 1500);
    }
    
    closeChatModal() {
        const modal = document.getElementById('chat-modal');
        modal.classList.remove('active');
        this.currentChatUser = null;
    }
    
    renderProfile() {
        const user = this.data.users.find(u => u.id === this.currentUser.id);
        const profileHeader = document.getElementById('profile-header');
        
        profileHeader.innerHTML = `
            <div class="profile-info">
                <img src="${user.profileImage}" alt="${user.username}" class="profile-avatar-large">
                <div class="profile-details">
                    <div class="profile-username">
                        ${user.username}
                        ${user.verified ? '<span class="verified-badge">✓</span>' : ''}
                    </div>
                    <div class="profile-stats">
                        <div class="stat-item">
                            <span class="stat-number">${this.formatNumber(user.posts)}</span>
                            <span class="stat-label">posts</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${this.formatNumber(user.followers)}</span>
                            <span class="stat-label">followers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${this.formatNumber(user.following)}</span>
                            <span class="stat-label">following</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-bio">${user.bio}</div>
            <div class="profile-actions">
                <button class="btn btn--outline">Edit Profile</button>
                <button class="btn btn--outline">Share Profile</button>
            </div>
        `;
        
        this.renderProfilePosts();
    }
    
    renderProfilePosts() {
        const profilePosts = document.getElementById('profile-posts');
        profilePosts.innerHTML = '';
        
        // Filter posts for current user
        const userPosts = this.data.posts.filter(p => p.userId === this.currentUser.id);
        
        userPosts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'profile-post-item';
            postItem.innerHTML = `<img src="${post.imageUrl}" alt="Post">`;
            profilePosts.appendChild(postItem);
        });
    }
    
    renderExplore() {
        const exploreGrid = document.getElementById('explore-grid');
        exploreGrid.innerHTML = '';
        
        // Mix all posts for explore section
        const allPosts = [...this.data.posts];
        
        // Shuffle array for randomness
        for (let i = allPosts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allPosts[i], allPosts[j]] = [allPosts[j], allPosts[i]];
        }
        
        // Create explore grid
        allPosts.forEach(post => {
            const exploreItem = document.createElement('div');
            exploreItem.className = 'explore-item';
            exploreItem.innerHTML = `<img src="${post.imageUrl}" alt="Explore post">`;
            exploreGrid.appendChild(exploreItem);
        });
    }
    
    renderNotifications() {
        const notificationsList = document.getElementById('notifications-list');
        notificationsList.innerHTML = '';
        
        this.data.notifications.forEach(notification => {
            const user = this.data.users.find(u => u.username === notification.username);
            if (!user) return;
            
            const notificationItem = document.createElement('div');
            notificationItem.className = `notification-item ${!notification.isRead ? 'unread' : ''}`;
            
            notificationItem.innerHTML = `
                <img src="${user.profileImage}" alt="${user.username}" class="notification-avatar">
                <div class="notification-content">
                    <div class="notification-text">
                        <span class="notification-username">${user.username}</span>
                        ${notification.action}
                    </div>
                    <div class="notification-time">${notification.timestamp}</div>
                </div>
            `;
            
            notificationsList.appendChild(notificationItem);
        });
    }
    
    toggleNotifications() {
        const panel = document.getElementById('notifications-panel');
        panel.classList.toggle('active');
        
        // Mark notifications as read when opened
        if (panel.classList.contains('active')) {
            this.data.notifications.forEach(notification => {
                notification.isRead = true;
            });
            
            // Remove notification dot
            document.querySelector('.notification-dot').style.display = 'none';
        }
    }
    
    closeNotifications() {
        const panel = document.getElementById('notifications-panel');
        panel.classList.remove('active');
    }
    
    setupIntersectionObserver() {
        const feedLoader = document.getElementById('feed-loader');
        
        // Create intersection observer for infinite scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.hasMorePosts && !this.isLoading) {
                    this.loadMorePosts();
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        observer.observe(feedLoader);
    }
    
    loadMorePosts() {
        this.isLoading = true;
        const feedLoader = document.getElementById('feed-loader');
        feedLoader.classList.remove('hidden');
        
        // Simulate loading delay
        setTimeout(() => {
            // Generate new posts
            const newPosts = this.generateMorePosts(3);
            this.data.posts.push(...newPosts);
            
            // Render new posts
            const postsContainer = document.getElementById('posts-container');
            
            newPosts.forEach(post => {
                const user = this.data.users.find(u => u.id === post.userId);
                const postElement = this.createPostElement(post, user);
                postsContainer.appendChild(postElement);
            });
            
            this.isLoading = false;
            
            // If we've loaded enough posts, stop infinite scroll
            if (this.data.posts.length > 15) {
                this.hasMorePosts = false;
                feedLoader.classList.add('hidden');
            }
        }, 1000);
    }
    
    generateMorePosts(count) {
        const posts = [];
        const images = [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=625&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=625&fit=crop",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=625&fit=crop",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=625&fit=crop"
        ];
        
        const captions = [
            "Beautiful sunset today! 🌅 #nature #photography",
            "Had an amazing time exploring the city! 🏙️ #travel #adventure",
            "New workout routine is killing me but feeling great! 💪 #fitness",
            "Delicious lunch at my favorite spot 🍽️ #foodie #delicious"
        ];
        
        for (let i = 0; i < count; i++) {
            const randomUser = this.data.users[Math.floor(Math.random() * this.data.users.length)];
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const randomCaption = captions[Math.floor(Math.random() * captions.length)];
            
            posts.push({
                id: Date.now() + i,
                userId: randomUser.id,
                imageUrl: randomImage,
                caption: randomCaption,
                likes: Math.floor(Math.random() * 5000),
                comments: Math.floor(Math.random() * 200),
                shares: Math.floor(Math.random() * 50),
                saves: Math.floor(Math.random() * 300),
                timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
                location: null,
                isLiked: false,
                isSaved: false,
                aspectRatio: "4:5"
            });
        }
        
        return posts;
    }
    
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
    
    showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 24px;
            font-size: 14px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        `;
        
        document.body.appendChild(toast);
        
        // Fade in
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 10);
        
        // Auto dismiss
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}

// Add CSS for the typing indicator
const typingIndicatorStyle = document.createElement('style');
typingIndicatorStyle.textContent = `
    .typing-indicator {
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 12px 16px;
        height: 30px;
    }
    
    .typing-indicator span {
        width: 8px;
        height: 8px;
        background-color: var(--color-text-secondary);
        border-radius: 50%;
        display: inline-block;
        animation: typing-bounce 1.4s infinite ease-in-out both;
    }
    
    .typing-indicator span:nth-child(1) {
        animation-delay: -0.32s;
    }
    
    .typing-indicator span:nth-child(2) {
        animation-delay: -0.16s;
    }
    
    @keyframes typing-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
    }
    
    .toast {
        z-index: 10000;
    }
`;
document.head.appendChild(typingIndicatorStyle);