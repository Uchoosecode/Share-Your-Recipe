class ChefSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio

  has_many :recipes
end
