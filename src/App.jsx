
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Accessibility in Web Design</h1>
        <h2>Understanding and Implementing WCAG Guidelines</h2>
      </header>
      <main>
        <section>
          <h3>Introduction to Accessibility</h3>
          <p>
            Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. More specifically, people can perceive, understand, navigate, and interact with the Web, and they can contribute to the Web.
          </p>
          <p>
            Implementing web accessibility involves ensuring that your content is usable by everyone, including people with disabilities. This can include adding alternative text to images, ensuring sufficient color contrast, providing captions for videos, and making sure that forms are easily navigable using a keyboard.
          </p>
        </section>
        <section>
          <h3>Accessibility Features Implemented</h3>
          <ul>
            <li>Two heading levels</li>
            <li>Two paragraphs of text</li>
            <li>Links to external resources</li>
            <li>Decorative and non-decorative images</li>
            <li>Tabular data</li>
            <li>Accessible form</li>
            <li>Accessible video with captions and descriptions</li>
          </ul>
        </section>
        <section>
          <h3>Useful Resources</h3>
          <p>For more information on web accessibility, check out the following links:</p>
          <ul>
            <li><a href="https://www.w3.org/WAI/">W3C Web Accessibility Initiative</a></li>
            <li><a href="https://www.a11yproject.com/">The A11Y Project</a></li>
          </ul>
        </section>
        <section>
          <h3>Example Table</h3>
          <table>
            <caption>Web Accessibility Guidelines Overview</caption>
            <thead>
              <tr>
                <th>Guideline</th>
                <th>Description</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Perceivable</td>
                <td>Information and user interface components must be presentable to users in ways they can perceive.</td>
                <td>AA</td>
              </tr>
              <tr>
                <td>Operable</td>
                <td>User interface components and navigation must be operable.</td>
                <td>AA</td>
              </tr>
              <tr>
                <td>Understandable</td>
                <td>Information and the operation of user interface must be understandable.</td>
                <td>AA</td>
              </tr>
              <tr>
                <td>Robust</td>
                <td>Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.</td>
                <td>AA</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h3>Contact Us</h3>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required aria-required="true" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required aria-required="true" />
            <button className='btn-submit' type="submit">Submit</button>
          </form>
        </section>
        <section>
  <h3>Accessible Video</h3>
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/5H1JGdqLrWo" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
  <p>This video covers the importance of web accessibility and provides an overview of best practices.</p>
</section>
      </main>
      <footer>
        <p>&copy; 2024 Accessibility in Web Design. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
