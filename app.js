// Instagram Clone JavaScript with Advanced Functionality

// Sample data from the provided JSON
const appData = {
  "users": [
    {
      "id": 1,
      "username": "john_doe",
      "displayName": "John Doe",
      "profilePicture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "followers": 1250,
      "following": 456,
      "posts": 89,
      "bio": "📸 Photographer | 🌍 World Traveler | ☕ Coffee Enthusiast",
      "website": "johndoe.com",
      "isVerified": true,
      "hasStory": true
    },
    {
      "id": 2,
      "username": "emma_wilson",
      "displayName": "Emma Wilson",
      "profilePicture": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      "followers": 2100,
      "following": 234,
      "posts": 156,
      "bio": "🎨 Digital Artist | 🌟 Creative Soul | 🎭 Living in Color",
      "website": "emmawilson.art",
      "isVerified": false,
      "hasStory": true
    },
    {
      "id": 3,
      "username": "alex_smith",
      "displayName": "Alex Smith",
      "profilePicture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "followers": 890,
      "following": 123,
      "posts": 67,
      "bio": "🏋️ Fitness Coach | 💪 Motivation Daily | 🥗 Healthy Living",
      "website": "alexfitness.com",
      "isVerified": false,
      "hasStory": false
    }
  ],
  "posts": [
    {
      "id": 1,
      "userId": 1,
      "username": "john_doe",
      "userProfilePicture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "images": ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=500&fit=crop"],
      "caption": "Beautiful sunset at the mountains today! 🌅 #nature #sunset #mountains #photography",
      "likes": 1234,
      "comments": 56,
      "timeAgo": "2 hours ago",
      "isLiked": false,
      "isSaved": false
    },
    {
      "id": 2,
      "userId": 2,
      "username": "emma_wilson",
      "userProfilePicture": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      "images": ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop"],
      "caption": "New digital artwork completed! What do you think? 🎨✨ #digitalart #creative #art #design",
      "likes": 892,
      "comments": 34,
      "timeAgo": "4 hours ago",
      "isLiked": true,
      "isSaved": false
    },
    {
      "id": 3,
      "userId": 3,
      "username": "alex_smith",
      "userProfilePicture": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "images": ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop"],
      "caption": "Morning workout session! 💪 Remember, consistency is key! #fitness #workout #motivation #health",
      "likes": 567,
      "comments": 23,
      "timeAgo": "6 hours ago",
      "isLiked": false,
      "isSaved": true
    }
  ],
  "stories": [
    {
      "id": 1,
      "userId": 1,
      "username": "john_doe",
      "profilePicture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "hasStory": true,
      "isViewed": false
    },
    {
      "id": 2,
      "userId": 2,
      "username": "emma_wilson",
      "profilePicture": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      "hasStory": true,
      "isViewed": true
    }
  ],
  "suggestions": [
    {
      "username": "mike_photo",
      "displayName": "Mike Rodriguez",
      "profilePicture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      "mutualFollowers": 3,
      "isFollowing": false
    },
    {
      "username": "sarah_art",
      "displayName": "Sarah Johnson",
      "profilePicture": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      "mutualFollowers": 7,
      "isFollowing": false
    }
  ]
};

// Application state
let currentUser = appData.users[0];
let posts = [...appData.posts];
let stories = [...appData.stories];
let suggestions = [...appData.suggestions];

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const storiesContainer = document.getElementById('storiesContainer');
const suggestionsList = document.getElementById('suggestionsList');
const storyModal = document.getElementById('storyModal');
const createModal = document.getElementById('createModal');
const likeAnimation = document.getElementById('likeAnimation');
const darkModeToggle = document.getElementById('darkModeToggle');
const searchInput = document.querySelector('.search-input');
const searchSuggestions = document.getElementById('searchSuggestions');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderStories();
    renderPosts();
    renderSuggestions();
    setupEventListeners();
    setupDarkMode();
    setupSearch();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
}

// Render Stories
function renderStories() {
    const storiesHTML = stories.map(story => `
        <div class="story ${story.isViewed ? 'story--viewed' : ''}" data-story-id="${story.id}">
            <div class="story__avatar">
                <img src="${story.profilePicture}" alt="${story.username}">
            </div>
            <span class="story__username">${story.username}</span>
        </div>
    `).join('');
    
    // Find the add story element and append after it
    const addStoryElement = storiesContainer.querySelector('.story--add');
    addStoryElement.insertAdjacentHTML('afterend', storiesHTML);
}

// Render Posts
function renderPosts() {
    const postsHTML = posts.map(post => `
        <article class="post" data-post-id="${post.id}">
            <header class="post__header">
                <img src="${post.userProfilePicture}" alt="${post.username}" class="post__avatar">
                <div class="post__user">
                    <span class="post__username">${post.username}</span>
                </div>
                <button class="post__options">⋯</button>
            </header>
            
            <div class="post__content">
                <img src="${post.images[0]}" alt="Post image" class="post__image">
            </div>
            
            <div class="post__actions">
                <div class="post__actions-primary">
                    <button class="post__action-btn like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isLiked ? '#ed4956' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                    <button class="post__action-btn comment-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </button>
                    <button class="post__action-btn share-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                            <polyline points="16,6 12,2 8,6"/>
                            <line x1="12" y1="2" x2="12" y2="15"/>
                        </svg>
                    </button>
                </div>
                <button class="post__action-btn save-btn ${post.isSaved ? 'saved' : ''}" data-post-id="${post.id}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                </button>
            </div>
            
            <div class="post__details">
                <div class="post__likes">
                    <span class="likes-count">${formatLikes(post.likes)}</span> likes
                </div>
                <div class="post__caption">
                    <span class="post__username-caption">${post.username}</span>
                    ${formatCaption(post.caption)}
                </div>
                ${post.comments > 0 ? `<a href="#" class="post__comments-link">View all ${post.comments} comments</a>` : ''}
                <div class="post__timestamp">${post.timeAgo}</div>
            </div>
            
            <form class="post__comment-form">
                <input type="text" placeholder="Add a comment..." class="post__comment-input">
                <button type="submit" class="post__comment-submit">Post</button>
            </form>
        </article>
    `).join('');
    
    postsContainer.innerHTML = postsHTML;
}

// Render Suggestions
function renderSuggestions() {
    const suggestionsHTML = suggestions.map(suggestion => `
        <div class="suggestion-item">
            <img src="${suggestion.profilePicture}" alt="${suggestion.username}">
            <div class="suggestion-item__info">
                <span class="username">${suggestion.username}</span>
                <span class="suggestion-item__mutual">Followed by ${suggestion.mutualFollowers} others</span>
            </div>
            <button class="btn-link follow-btn" data-username="${suggestion.username}">
                ${suggestion.isFollowing ? 'Following' : 'Follow'}
            </button>
        </div>
    `).join('');
    
    suggestionsList.innerHTML = suggestionsHTML;
}

// Setup Event Listeners
function setupEventListeners() {
    // Like button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            handleLike(e.target.closest('.like-btn'));
        }
        
        if (e.target.closest('.save-btn')) {
            handleSave(e.target.closest('.save-btn'));
        }
        
        if (e.target.closest('.story')) {
            handleStoryClick(e.target.closest('.story'));
        }
        
        if (e.target.closest('.follow-btn')) {
            handleFollowClick(e.target.closest('.follow-btn'));
        }
        
        if (e.target.id === 'closeStory') {
            closeStoryModal();
        }
        
        if (e.target.id === 'createPost' || e.target.closest('#createPost')) {
            openCreateModal();
        }
        
        if (e.target.id === 'cancelCreate') {
            closeCreateModal();
        }
        
        if (e.target.closest('.modal') && e.target.classList.contains('modal')) {
            if (e.target.id === 'storyModal') closeStoryModal();
            if (e.target.id === 'createModal') closeCreateModal();
        }
    });
    
    // Double tap to like (mobile and desktop)
    document.addEventListener('dblclick', function(e) {
        if (e.target.closest('.post__image')) {
            const post = e.target.closest('.post');
            const postId = post.dataset.postId;
            const likeBtn = post.querySelector('.like-btn');
            
            if (!likeBtn.classList.contains('liked')) {
                handleLike(likeBtn);
                showLikeAnimation(e.clientX, e.clientY);
            }
        }
    });
    
    // Comment form submission
    document.addEventListener('submit', function(e) {
        if (e.target.classList.contains('post__comment-form')) {
            e.preventDefault();
            handleCommentSubmit(e.target);
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
        searchSuggestions.classList.remove('hidden');
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header__search')) {
            searchSuggestions.classList.add('hidden');
        }
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Sidebar navigation
    document.querySelectorAll('.sidebar__link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.sidebar__link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Handle like functionality
function handleLike(likeBtn) {
    const postId = parseInt(likeBtn.dataset.postId);
    const post = posts.find(p => p.id === postId);
    const likesCountElement = likeBtn.closest('.post').querySelector('.likes-count');
    const heartIcon = likeBtn.querySelector('svg');
    
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
        
        // Update UI
        likeBtn.classList.toggle('liked');
        heartIcon.setAttribute('fill', post.isLiked ? '#ed4956' : 'none');
        likesCountElement.textContent = formatLikes(post.likes);
        
        // Add animation
        likeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            likeBtn.style.transform = 'scale(1)';
        }, 150);
    }
}

// Handle save functionality
function handleSave(saveBtn) {
    const postId = parseInt(saveBtn.dataset.postId);
    const post = posts.find(p => p.id === postId);
    const saveIcon = saveBtn.querySelector('svg');
    
    if (post) {
        post.isSaved = !post.isSaved;
        
        // Update UI
        saveBtn.classList.toggle('saved');
        saveIcon.setAttribute('fill', post.isSaved ? 'currentColor' : 'none');
        
        // Add animation
        saveBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            saveBtn.style.transform = 'scale(1)';
        }, 150);
    }
}

// Handle story click
function handleStoryClick(storyElement) {
    if (storyElement.classList.contains('story--add')) {
        openCreateModal();
        return;
    }
    
    const storyId = parseInt(storyElement.dataset.storyId);
    const story = stories.find(s => s.id === storyId);
    
    if (story) {
        openStoryModal(story);
        // Mark as viewed
        story.isViewed = true;
        storyElement.classList.add('story--viewed');
    }
}

// Open story modal
function openStoryModal(story) {
    const storyAvatar = document.getElementById('storyAvatar');
    const storyUsername = document.getElementById('storyUsername');
    
    storyAvatar.src = story.profilePicture;
    storyUsername.textContent = story.username;
    
    storyModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Start progress bar animation
    const progressBar = document.querySelector('.progress-bar__fill');
    progressBar.style.animation = 'none';
    progressBar.offsetHeight; // Trigger reflow
    progressBar.style.animation = 'progress 5s linear';
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeStoryModal();
    }, 5000);
}

// Close story modal
function closeStoryModal() {
    storyModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Open create modal
function openCreateModal() {
    createModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close create modal
function closeCreateModal() {
    createModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Handle follow/unfollow
function handleFollowClick(followBtn) {
    const username = followBtn.dataset.username;
    const suggestion = suggestions.find(s => s.username === username);
    
    if (suggestion) {
        suggestion.isFollowing = !suggestion.isFollowing;
        followBtn.textContent = suggestion.isFollowing ? 'Following' : 'Follow';
        followBtn.classList.toggle('following', suggestion.isFollowing);
        
        // Add animation
        followBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            followBtn.style.transform = 'scale(1)';
        }, 100);
    }
}

// Handle comment submission
function handleCommentSubmit(form) {
    const input = form.querySelector('.post__comment-input');
    const comment = input.value.trim();
    
    if (comment) {
        // Simulate adding comment
        input.value = '';
        
        // Add visual feedback
        const post = form.closest('.post');
        const commentsLink = post.querySelector('.post__comments-link');
        if (commentsLink) {
            const currentCount = parseInt(commentsLink.textContent.match(/\d+/)[0]);
            commentsLink.textContent = `View all ${currentCount + 1} comments`;
        }
        
        // Show success animation
        form.style.transform = 'scale(0.98)';
        setTimeout(() => {
            form.style.transform = 'scale(1)';
        }, 100);
    }
}

// Show like animation
function showLikeAnimation(x, y) {
    likeAnimation.style.left = x - 60 + 'px';
    likeAnimation.style.top = y - 60 + 'px';
    likeAnimation.classList.remove('hidden');
    
    setTimeout(() => {
        likeAnimation.classList.add('hidden');
    }, 1000);
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length > 0) {
        const results = [
            ...appData.users.filter(user => 
                user.username.toLowerCase().includes(query) || 
                user.displayName.toLowerCase().includes(query)
            ),
            ...suggestions.filter(suggestion => 
                suggestion.username.toLowerCase().includes(query) || 
                suggestion.displayName.toLowerCase().includes(query)
            )
        ].slice(0, 5);
        
        const resultsHTML = results.map(result => `
            <div class="search-result" style="padding: 8px 16px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <img src="${result.profilePicture}" alt="${result.username}" style="width: 32px; height: 32px; border-radius: 50%;">
                <div>
                    <div style="font-weight: 600; font-size: 14px;">${result.username}</div>
                    <div style="color: var(--color-ig-text-secondary); font-size: 12px;">${result.displayName}</div>
                </div>
            </div>
        `).join('');
        
        searchSuggestions.innerHTML = resultsHTML;
        searchSuggestions.classList.remove('hidden');
    } else {
        searchSuggestions.classList.add('hidden');
    }
}

// Dark mode functionality
function setupDarkMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add rotation animation to toggle button
    darkModeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        darkModeToggle.style.transform = '';
    }, 300);
}

// Utility functions
function formatLikes(likes) {
    if (likes >= 1000000) {
        return (likes / 1000000).toFixed(1) + 'M';
    } else if (likes >= 1000) {
        return (likes / 1000).toFixed(1) + 'K';
    }
    return likes.toString();
}

function formatCaption(caption) {
    return caption.replace(/#(\w+)/g, '<span class="post__hashtag">#$1</span>');
}

// Infinite scroll simulation
let isLoading = false;
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && !isLoading) {
        loadMorePosts();
    }
});

function loadMorePosts() {
    isLoading = true;
    
    // Simulate loading delay
    setTimeout(() => {
        const newPosts = [
            {
                id: posts.length + 1,
                userId: Math.floor(Math.random() * 3) + 1,
                username: ['john_doe', 'emma_wilson', 'alex_smith'][Math.floor(Math.random() * 3)],
                userProfilePicture: appData.users[Math.floor(Math.random() * 3)].profilePicture,
                images: [
                    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=500&fit=crop',
                    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop'
                ][Math.floor(Math.random() * 3)],
                caption: [
                    'Amazing day out! 🌟 #adventure #life',
                    'Loving this moment 💕 #blessed #grateful',
                    'New experiences await! 🚀 #explore #journey'
                ][Math.floor(Math.random() * 3)],
                likes: Math.floor(Math.random() * 1000) + 100,
                comments: Math.floor(Math.random() * 50) + 5,
                timeAgo: Math.floor(Math.random() * 12) + 1 + ' hours ago',
                isLiked: Math.random() > 0.5,
                isSaved: Math.random() > 0.8
            }
        ];
        
        posts.push(...newPosts);
        
        // Render new posts with animation
        const newPostsHTML = newPosts.map(post => `
            <article class="post" data-post-id="${post.id}" style="opacity: 0; transform: translateY(20px);">
                <header class="post__header">
                    <img src="${post.userProfilePicture}" alt="${post.username}" class="post__avatar">
                    <div class="post__user">
                        <span class="post__username">${post.username}</span>
                    </div>
                    <button class="post__options">⋯</button>
                </header>
                
                <div class="post__content">
                    <img src="${post.images}" alt="Post image" class="post__image">
                </div>
                
                <div class="post__actions">
                    <div class="post__actions-primary">
                        <button class="post__action-btn like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isLiked ? '#ed4956' : 'none'}" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                            </svg>
                        </button>
                        <button class="post__action-btn comment-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                        </button>
                        <button class="post__action-btn share-btn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                                <polyline points="16,6 12,2 8,6"/>
                                <line x1="12" y1="2" x2="12" y2="15"/>
                            </svg>
                        </button>
                    </div>
                    <button class="post__action-btn save-btn ${post.isSaved ? 'saved' : ''}" data-post-id="${post.id}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="${post.isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                    </button>
                </div>
                
                <div class="post__details">
                    <div class="post__likes">
                        <span class="likes-count">${formatLikes(post.likes)}</span> likes
                    </div>
                    <div class="post__caption">
                        <span class="post__username-caption">${post.username}</span>
                        ${formatCaption(post.caption)}
                    </div>
                    ${post.comments > 0 ? `<a href="#" class="post__comments-link">View all ${post.comments} comments</a>` : ''}
                    <div class="post__timestamp">${post.timeAgo}</div>
                </div>
                
                <form class="post__comment-form">
                    <input type="text" placeholder="Add a comment..." class="post__comment-input">
                    <button type="submit" class="post__comment-submit">Post</button>
                </form>
            </article>
        `).join('');
        
        postsContainer.insertAdjacentHTML('beforeend', newPostsHTML);
        
        // Animate new posts
        setTimeout(() => {
            const newPostElements = postsContainer.querySelectorAll('.post[style*="opacity: 0"]');
            newPostElements.forEach((post, index) => {
                setTimeout(() => {
                    post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    post.style.opacity = '1';
                    post.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
        
        isLoading = false;
    }, 1000);
}

// Touch events for mobile
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    // Pull to refresh simulation
    if (diff < -100 && window.scrollY === 0) {
        location.reload();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        closeStoryModal();
        closeCreateModal();
    }
    
    // Space bar likes focused post
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const firstPost = document.querySelector('.post .like-btn');
        if (firstPost) {
            handleLike(firstPost);
        }
    }
});