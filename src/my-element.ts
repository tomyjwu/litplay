import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
    @property()
    foo = {"firstName": "aaa",
        "lastName":"aaa",
        "username": "aaa",
        "email": "aaaaa",
        "id":"aaa"};

    render() {
        return html`
        <style>
      .s1{
        color:red;
        font-size:24px;
      }
      .s2{
        color:orange;
        font-size:28px;
      }
      .s3{
        color:green;
        font-size:32px;
      }
      </style>
        <h1 class="s1">${this.foo.firstName}</h1>
        <h2 class="s2">${this.foo.lastName}</h2>
        <h3 class="s3">${this.foo.username}</h3>
        `;
    }

    firstUpdated(changedProperties:any) {
        changedProperties.forEach((oldValue:any , propName:any) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        fetch('/api/user')
            .then((response) => response.json())
            .then((bodyRes) => {this.foo=bodyRes});

    }
}
