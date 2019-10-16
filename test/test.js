// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/index";
var tester = new TextLintTester();
tester.run("brand names", rule, {
    valid: [
        'CircleCI',
        'Elixir',
        'GitHub',
        'GitHub Actions',
        '//github.com/elixir/',
        '//hexdocs.pm/elixir/Application.html'
    ],
    invalid: [
        {
            text: "elixir",
            errors: [
                {
                    message: "elixir => Elixir"
                }
            ]
        },
        {
            text: "github",
            errors: [
                {
                    message: "github => GitHub"
                }
            ]
        },
        {
            text: "GitHub actions",
            errors: [
                {
                    message: "GitHub actions => GitHub Actions"
                }
            ]
        },
        {
            text: "GitHub Action",
            errors: [
                {
                    message: "GitHub Action => GitHub Actions"
                }
            ]
        },
    ]
});
