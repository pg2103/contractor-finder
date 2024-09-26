function Contact() {
    return (
        <div>
            <h1>Contact Contractor</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder="Your name" />
                </div>
                <div>
                    <label>Service Type: </label>
                    <select>
                        <option value="building">Building</option>
                        <option value="designing">Designing</option>
                        <option value="cleaning">Cleaning</option>
                    </select>
                </div>
                <div>
                    <label>Message: </label>
                    <textarea placeholder="Describe your project or requirements" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
