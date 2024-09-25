const ProspectiveStudents = () => {
    return (
        <div className="w-4/5 mx-auto md:w-1/2  text-justify p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Information for Prospective Students</h1>

            {/* Prospective PhD Students Section */}
            <section className="mb-8">
                <p>
                    <span className="font-bold">Prospective PhD Students: {' '}</span>
                    We welcome applications from motivated individuals interested in pursuing a PhD in our lab. 
                    Most of our students has background in Engineering or Computer Sciences.
                    Before reaching out, please ensure you are fully prepared by following the guidelines below.
                </p>
                <p>
                    Review our current research areas and projects to ensure alignment with your interests.
                    In your email, include a brief description of yourself, your academic background and projects
                    you're excited to work on.
                    Attach your CV, which should detail your research background, projects you've worked on, 
                    and any relevant publications. Ensure that all associated links are included in your CV.
                    Our lab conducts numerous experiments and therefore expects potential candidates to have programming 
                    experience.
                    In the subject line of your email, please use the format: “Prospective PhD Candidate - verified”.
                    This indicates that you have read this section before contacting me. Emails without the above 
                    subject format may automatically be filtered out. 
                </p>
                <p>
                    Please note that the rate at which I receive emails grows exponentially each month, 
                    and failure to respond to your email does not mean it hasn't been read.  
                </p>
                <p>
                    Please send your email to {" "}
                    <a className="underline" href="https://mailhide.io/e/rHMy8YKE" onClick={(e) => { 
                        e.preventDefault(); 
                        window.open('https://mailhide.io/e/rHMy8YKE', 'mailhidepopup', 'width=580,height=635'); 
                    }}>reveal email</a>
                    . For detailed application  process, visit the {""}
                    <a className="underline font-bold" href="https://www.ndsu.edu/programs/undergraduate/civil-engineering" target="_blank">Civil, Construction and Environmental Engineering</a> {" "}
                    website.
                </p>
            </section>

            {/* Prospective Master's Students Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Undergraduate and Master's Students</h2>
                <p>
                    For master's and undergraduate students at NDSU interested in working with me, send me an email
                    with your CV and topics you are interested in working on. use the subject line "NDSU student seeking collaboration".
                    Apply to NDSU if you are not a student and send me an email once you are admitted.
                </p>
            </section>

            {/* Internship Opportunities Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Internship Opportunities</h2>
                <p>
                    We currently do not have internship opportunities for available. Openeings will be advertised once available.
                </p>
                {/* <p>
                    looking to gain hands-on experience in transportation research and data science. 
                    If you are interested in applying for an internship, please send your CV along with a brief cover letter outlining your interests and relevant skills.
                </p> */}
            </section>
        </div>
    );
};

export default ProspectiveStudents;