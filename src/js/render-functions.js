export const creatImg = images =>
  images
    .map(
      image =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-img"
                src="${image.webformatURL}" 
                alt="${image.tags}" 
                width="360" 
                height="200"/>
                <ul class="img-info-list">
                    <li class="img-info-item">
                        <p class="info-title">Likes</p>
                        <p class="info-value">${image.likes}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Views</p>
                       <p class="info-value">${image.views}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Comments</p>
                        <p class="info-value">${image.comments}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Downloads</p>
                        <p class="info-value">${image.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`
    )
    .join('');
