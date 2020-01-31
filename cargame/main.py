import os
from flask import Flask, render_template
from flask_assets import Environment, Bundle

app = Flask(__name__)
assets = Environment(app)

js = Bundle(
    'js/game.js',
    'js/background.js',
    'js/player.js',
    'js/scenes.js',
    'js/score.js',
    'js/spawner.js',
    output='gen/packed.js'
)
assets.register('js_all', js)


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")
