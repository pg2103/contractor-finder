function Home() {
    return (
        <div>
            <h1>Find Contractors for Your Home Services</h1>
            <input type="text" placeholder="Search for contractors" />

            <section>
                <h2>Contractor Categories</h2>
                <div>
                    <h3>Building</h3>
                    <p>Find contractors for construction and renovation.</p>
                    <a href="/contractors?category=building">Browse Building Contractors</a>
                </div>
                <div>
                    <h3>Designing</h3>
                    <p>Find interior designers and architects.</p>
                    <a href="/contractors?category=designing">Browse Designing Contractors</a>
                </div>
                <div>
                    <h3>Cleaning</h3>
                    <p>Find professional cleaning services for your home.</p>
                    <a href="/contractors?category=cleaning">Browse Cleaning Contractors</a>
                </div>
            </section>
        </div>
    );
}

export default Home;
