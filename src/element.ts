import { LitElement, html, property, customElement } from 'lit-element';

@customElement('test-component')
class TestComponent extends LitElement {
    @property() name = 'World';

    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return html`
                <style>
                    :host {
                    font-family: Roboto, Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    padding: 2rem;
                    }
                    ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    }
                    li {
                    line-height: 1.6rem;
                    }
                </style>
                <h1>Test</h1>`
            ;
    }
}