function Contractors() {
    return (
        <div>
            <h1>Browse Contractors</h1>

            {/* Filters section */}
            <section>
                <h2>Filter Contractors</h2>
                <div>
                    <label>Service Type: </label>
                    <select>
                        <option value="building">Building</option>
                        <option value="designing">Designing</option>
                        <option value="cleaning">Cleaning</option>
                    </select>
                </div>
                <div>
                    <label>Location: </label>
                    <input type="text" placeholder="Enter location" />
                </div>
                <div>
                    <label>Price Range: </label>
                    <input type="number" placeholder="Min Price" />
                    <input type="number" placeholder="Max Price" />
                </div>
            </section>

            {/* Contractor list section */}
            <section>
                <h2>Available Contractors</h2>
                <div>
                    <p>Contractor 1 - Building Services - $100/hr</p>
                    <p>Contractor 2 - Designing Services - $150/hr</p>
                    <p>Contractor 3 - Cleaning Services - $80/hr</p>
                    {/* Add more contractor placeholders as needed */}
                </div>
            </section>
        </div>
    );
}

export default Contractors;
