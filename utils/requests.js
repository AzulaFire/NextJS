const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Properties

async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet.

    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch data.');
    }

    return res.json();
  } catch (error) {
    console.log(Error);
    return [];
  }
}

// Fetch Single Property

async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet.

    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data.');
    }

    return res.json();
  } catch (error) {
    console.log(Error);
    return null;
  }
}

// Fetch Featured Properties

async function fetchFeaturedProperties() {
  try {
    // Handle the case where the domain is not available yet.

    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties/featured`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data.');
    }

    return res.json();
  } catch (error) {
    console.log(Error);
    return [];
  }
}

export { fetchProperties, fetchProperty, fetchFeaturedProperties };
