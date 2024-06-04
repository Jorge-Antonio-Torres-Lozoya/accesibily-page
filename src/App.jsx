
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
          <h3>Example Images</h3>
          <img src="data:image/jpeg;base64,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" alt="" role="presentation" />
          <img src="https://www.dreamhost.com/blog/wp-content/uploads/2022/06/02-eliminando-barreras-accesibilidad.jpg" alt="Accessibility barriers eliminated. Readers, typography, alt text, subtitles" />
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
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lI0JjVF2q_Y?si=4K2FJmZzlfCIjYMh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
