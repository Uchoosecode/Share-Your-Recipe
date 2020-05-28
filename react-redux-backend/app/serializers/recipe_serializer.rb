class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :chef_id, :title, :ingredients, :instructions
end
