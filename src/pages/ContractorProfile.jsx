function ContractorProfile() {
    return (
        <div>
            <h1>Contractor Profile</h1>

            {/* Contractor details section */}
            <section>
                <h2>John Doe</h2>
                <p>Service: Building</p>
                <p>Experience: 10 years</p>
                <p>Rating: 4.5/5</p>
            </section>

            {/* Reviews section */}
            <section>
                <h2>Client Reviews</h2>
                <p>Review 1: Great service, very professional!</p>
                <p>Review 2: Completed the project on time.</p>
            </section>

            {/* Contact button */}
            <button>Contact Contractor</button>
        </div>
    );
}

export default ContractorProfile;
