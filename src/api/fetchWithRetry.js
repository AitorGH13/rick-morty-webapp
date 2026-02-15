/**
 * Fetch with retry logic and exponential backoff.
 * Retries on network errors and 5xx server errors.
 *
 * @param {string} url - The URL to fetch
 * @param {object} options - Fetch options
 * @param {number} maxRetries - Maximum number of retries (default: 3)
 * @param {number} baseDelay - Base delay in ms for exponential backoff (default: 500)
 * @returns {Promise<Response>} The fetch response
 */
export async function fetchWithRetry(
  url,
  options = {},
  maxRetries = 3,
  baseDelay = 500
) {
  let lastError;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (res.ok || res.status < 500) {
        return res;
      }
      lastError = new Error(`Server error: ${res.status}`);
    } catch (err) {
      lastError = err;
    }
    if (attempt < maxRetries) {
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}
