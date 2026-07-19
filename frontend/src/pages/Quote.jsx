const submit = async(e)=>{
    e.preventDefault();

    await api.post(
        "quote-requests/",
        {
            company_name,
            contact_person,
            email,
            project_description
        }
    );

    alert("Quote request submitted.");
}
const [loading,setLoading]=useState(false);
setLoading(true);
setLoading(false);

<button>
{
loading ?
"Sending..."
:
"Send Message"
}
</button>


function Quote() {
    return (
        <section className="page-section">
            <div className="container">

                <h1>Request a Quote</h1>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Company Name"
                    />

                    <input
                        type="text"
                        placeholder="Contact Person"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <textarea
                        rows="8"
                        placeholder="Project Description"
                    />

                    <button
                        className="button button-primary"
                    >
                        Submit Quote Request
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Quote;