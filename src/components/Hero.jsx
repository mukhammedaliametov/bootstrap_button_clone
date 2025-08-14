import React from "react";
import Sidebar from "./Sidebar";

const Hero = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-[16px] relative">
      <Sidebar />
      <div className="mx-0 md:mx-[20%] flex ">
        <div className="font-inter mt-[20px] w-[100%]">
          <h1 className="text-3xl font-bold mb-4">Buttons</h1>
          <p className="text-gray-600 mb-6">
            Use Bootstrap's custom button styles for actions in forms, dialogs,
            and more, with more support for multiple sizes, states, and more.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Base class</h2>
          <p className="text-gray-600 mb-3">
            Bootstrap has a base{" "}
            <code className="bg-gray-100 px-1 rounded">.btn</code> class that
            sets up basic styles such as padding and content alignment.
          </p>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded">
              Base class
            </button>
          </div>
          <pre className="bg-gray-900 text-white p-3 rounded mb-8 overflow-x-auto">
            {`<button type="button" class="btn">Base class</button>`}
          </pre>
          <h2 className="text-2xl font-semibold mb-3">Variants</h2>
          <p className="text-gray-600 mb-3">
            Bootstrap includes several button variants, each serving its own
            semantic purpose.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Primary
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Secondary
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Success
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Danger
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Warning
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">
              Info
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded border">
              Light
            </button>
            <button className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded">
              Dark
            </button>
            <button className="text-blue-600 hover:underline px-4 py-2">
              Link
            </button>
          </div>
          <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
            {`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>`}
          </pre>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 mt-[20px]">
            <p className="text-sm text-blue-900">
              <strong>Accessibility tip:</strong> Using color to add meaning
              only provides a visual indication, which will not be conveyed to
              users of assistive technologies like screen readers. Please ensure
              the meaning is obvious from the content itself (e.g., the visible
              text with sufficient color contrast) or is included through
              alternative means, such as additional text hidden with the{" "}
              <code className="bg-gray-100 px-1 rounded">.visually-hidden</code>{" "}
              class.
            </p>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Disable text wrapping</h2>
          <p className="text-gray-600 mb-3">
            If you don’t want the button text to wrap, you can add the{" "}
            <code className="bg-gray-100 px-1 rounded">.text-nowrap</code> class
            to the button. In Sass, you can set{" "}
            <code className="bg-gray-100 px-1 rounded">
              $btn-white-space: nowrap
            </code>{" "}
            to disable text wrapping for each button.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Button tags</h2>
          <p className="text-gray-600 mb-3">
            The <code className="bg-gray-100 px-1 rounded">.btn</code> classes
            are designed to be used with the{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;button&gt;</code>{" "}
            element. However, you can also use these classes on{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;a&gt;</code> or{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;input&gt;</code>{" "}
            elements (though some browsers may apply a slightly different
            rendering).
          </p>
          <p className="text-gray-600 mb-3">
            When using button classes on{" "}
            <code className="bg-gray-100 px-1 rounded">&lt;a&gt;</code> elements
            that are used to trigger in-page functionality (like collapsing
            content), rather than linking to new pages or sections within the
            current page, these links should be given a{" "}
            <code className="bg-gray-100 px-1 rounded">role="button"</code> to
            appropriately convey their purpose to assistive technologies such as
            screen readers.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <a
              href="#"
              role="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Link
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Button
            </button>
            <input
              type="submit"
              value="Submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            />
            <input
              type="reset"
              value="Reset"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            />
          </div>
          <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
            {`<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="button">Button</button>
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">`}
          </pre>
          <h2 className="text-2xl font-semibold mb-3 mt-[20px]">
            Outline buttons
          </h2>
          <p className="text-gray-600 mb-3">
            In need of a button, but not the hefty background colors they bring?
            Use outline styles.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded">
              Primary
            </button>
            <button className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-4 py-2 rounded">
              Secondary
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded">
              Success
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded">
              Danger
            </button>
            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-4 py-2 rounded">
              Warning
            </button>
            <button className="border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-4 py-2 rounded">
              Info
            </button>
            <button className="border border-gray-300 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded">
              Light
            </button>
            <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded">
              Dark
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Sizes</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded text-lg">
              Large button
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded text-lg">
              Large button
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Small button
            </button>
            <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">
              Small button
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className="bg-blue-600 text-white rounded"
              style={{ padding: ".25rem .5rem", fontSize: ".75rem" }}
            >
              Custom button
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Disabled state</h2>
          <p className="text-gray-600 mb-3">
            Make buttons look inactive by adding the <code>disabled</code>{" "}
            attribute.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              disabled
            >
              Primary button
            </button>
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded"
              disabled
            >
              Button
            </button>
            <button
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded"
              disabled
            >
              Primary button
            </button>
            <button
              className="border border-gray-600 text-gray-600 px-4 py-2 rounded"
              disabled
            >
              Button
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-3 mt-10">Block buttons</h2>
          <p className="text-gray-600 mb-4">
            Create responsive stacks of full-width, "block buttons" like those
            in Bootstrap 4 with a mix of our display and gap utilities.
          </p>
          <div className="flex flex-col gap-2 mb-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Button
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Button
            </button>
          </div>

          <pre className="bg-gray-900 text-white p-3 rounded mb-6 overflow-x-auto">
            {`<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>`}
          </pre>
          <p className="text-gray-600 mb-4">
            Here we create a responsive variation, starting with vertically
            stacked buttons until the{" "}
            <code className="bg-gray-100 px-1 rounded">md</code> breakpoint.
          </p>

          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 mb-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Button
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Button
            </button>
          </div>

          <pre className="bg-gray-900 text-white p-3 rounded mb-6 overflow-x-auto">
            {`<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">Button</button>
  <button class="btn btn-primary" type="button">Button</button>
</div>`}
          </pre>
          <p className="text-gray-600 mb-4">
            You can also adjust the width of your block buttons with grid column
            width classes like{" "}
            <code className="bg-gray-100 px-1 rounded">.col-6</code>.
          </p>
          <div className="flex justify-center">
            <button className="w-1/2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Half-width Button
            </button>
          </div>
          <h2 className="text-2xl font-semibold mb-3">Base class</h2>
          <p className="text-gray-600 mb-3">
            Bootstrap has a base{" "}
            <code className="bg-gray-100 px-1 rounded">.btn</code> class that
            sets up basic styles such as padding and content alignment.
          </p>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded">
              Base class
            </button>
          </div>
          <pre className="bg-gray-900 text-white p-3 rounded mb-8 overflow-x-auto">
            {`<button type="button" class="btn">Base class</button>`}
          </pre>
          <h2 className="text-2xl font-semibold mb-3">Variants</h2>
          <p className="text-gray-600 mb-3">
            Bootstrap includes several button variants, each serving its own
            semantic purpose.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Primary
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Secondary
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Success
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Danger
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Warning
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">
              Info
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded border">
              Light
            </button>
            <button className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded">
              Dark
            </button>
            <button className="text-blue-600 hover:underline px-4 py-2">
              Link
            </button>
          </div>
          <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
            {`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>`}
          </pre>
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-[20px] mb-[40px]">
            <p className="text-sm text-blue-900">
              <strong>Accessibility tip:</strong> Using color to add meaning
              only provides a visual indication, which will not be conveyed to
              users of assistive technologies like screen readers. Please ensure
              the meaning is obvious from the content itself (e.g., the visible
              text with sufficient color contrast) or is included through
              alternative means, such as additional text hidden with the{" "}
              <code className="bg-gray-100 px-1 rounded">.visually-hidden</code>{" "}
              class.
            </p>
          </div>
        </div>
        <div className="hidden md:block w-[240px] fixed right-0 mt-[15px]">
          <div className=" text-sm">
            <p className="font-medium ml-[16px] border-b text-[18px] border-gray-300 pb-[5px] mb-[5px] w-[80%]">
              On this page
            </p>
            <ul className="space-y-3 border-l border-gray-300 pl-4">
              <li className="text-purple-600 font-medium">Base class</li>
              <li>Variants</li>
              <li>Disable text wrapping</li>
              <li>Button tags</li>
              <li>Outline buttons</li>
              <li>Sizes</li>
              <li>Disabled state</li>
              <li>Block buttons</li>
              <li>Button plugin</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
