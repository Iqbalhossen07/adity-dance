<dialog
    data-lightbox
    class="lightbox"
    aria-label="Image preview"
>
    <div class="lightbox-backdrop" data-lightbox-close></div>

    <div class="lightbox-panel" role="document">
        <button
            type="button"
            class="lightbox-close"
            data-lightbox-close
            aria-label="Close image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
        </button>

        <button
            type="button"
            class="lightbox-nav lightbox-prev"
            data-lightbox-prev
            aria-label="Previous image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
        </button>

        <figure class="lightbox-figure">
            <img data-lightbox-image src="" alt="">
            <figcaption data-lightbox-caption class="lightbox-caption"></figcaption>
        </figure>

        <button
            type="button"
            class="lightbox-nav lightbox-next"
            data-lightbox-next
            aria-label="Next image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
            </svg>
        </button>
    </div>
</dialog>
