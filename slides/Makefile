
all: slidy revealjs

slidy: vuejs.md
	pandoc -t slidy -s vuejs.md -o slidy.html

revealjs: vuejs.md
	pandoc -t revealjs -s vuejs.md -o revealjs.html
	sed -i -e 's/<style>/<style>section { font-size: 20px; } /' revealjs.html
	sed -i -e 's/code span.fu { color: #06287e; }/code span.fu { color: orange; }/' revealjs.html


