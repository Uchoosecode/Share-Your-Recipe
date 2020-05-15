# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
a = Chef.create(name: "Alice", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")

b = Chef.create(name: "Brian", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")

c = Chef.create(name: "Carol", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")

d = Chef.create(name: "Diana", bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

Recipe.create(title: "Sweet Potato Bread", ingredients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in", instructions: "Nec sagittis aliquam malesuada bibendum arcu vitae. Egestas erat imperdiet sed euismod nisi porta lorem.", chef_id: 1)

Recipe.create(title: "Vegan Ravioli", ingredients: "Senectus et netus, Et malesuada, Fames ac turpis, Nulla facilisi, Morbi tempus iaculis urna id", instructions: "Dui sapien eget mi proin sed libero. Dignissim cras tincidunt lobortis feugiat vivamus.", chef_id: 2)

Recipe.create(title: "Sour and Spicy Chicken", ingredients: "Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis.", instructions: "Aenean pharetra magna ac placerat vestibulum lectus mauris. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.", chef_id: 3)

Recipe.create(title: "Apple-Lemon Cake", ingredients: "Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.", instructions: "Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. A arcu cursus vitae congue mauris rhoncus aenean vel elit.", chef_id: 4)

Recipe.create(title: "Eggplant Bread", ingredients: "In hendrerit gravida rutrum quisque non tellus orci ac auctor.", instructions: "Vel facilisis volutpat est velit egestas dui id. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum pulvinar etiam non quam lacus. ", chef_id: 2)

Recipe.create(title: "Kiwi-Mango Cookies", ingredients: "Vivamus at augue eget arcu dictum varius duis at. Sem viverra aliquet eget sit amet tellus cras.", instructions: "Id neque aliquam vestibulum morbi blandit cursus risus. Erat imperdiet sed euismod nisi porta. Enim lobortis scelerisque fermentum dui faucibus in.", chef_id: 4)

Recipe.create(title: "Smoked Turkey Bites", ingredients: "Id diam vel quam elementum pulvinar. Urna porttitor rhoncus dolor purus non enim.", instructions: "Tempus urna et pharetra pharetra massa massa ultricies. Nullam eget felis eget nunc lobortis mattis aliquam. Fusce id velit ut tortor pretium. Aliquam sem et tortor consequat id.", chef_id: 3)

Recipe.create(title: "Avocado Cupcakes", ingredients: "Id diam maecenas ultricies mi eget mauris pharetra. At risus viverra adipiscing at in tellus integer feugiat.", instructions: "Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Faucibus pulvinar elementum integer enim neque volutpat. Enim neque volutpat ac tincidunt vitae. Vel facilisis volutpat est velit egestas dui id ornare.", chef_id: 4)
