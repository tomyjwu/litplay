import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName":"Jayce","lastName":"Hauck","username":"Domenic_Kuhn81","email":"Gladyce.Weber@yahoo.com"};

    render() {
    return html`
    <style>
    .s1 {
        color: blue;
    }
    </style>
    <h1 class="s1">${this.foo.firstName}</h1>
    <h2>${this.foo.lastName}</h2>
    <p>${this.foo.email}</p>`;
    }
    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('api/user')
            .then((response) => response.json())
            .then((bodyRes) => {
                this.foo = bodyRes;
            });

    }
}
