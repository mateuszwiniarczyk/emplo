import { PlusIcon, XIcon } from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from '@/shared';

type TagsProps = {
  tags: string[];
  handleAddTag: () => void;
  handleRemoveTag: (tag: string) => void;
  handleSetTag: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTag: string;
  error?: string;
};

export const Tags = ({
  tags,
  handleAddTag,
  handleRemoveTag,
  handleSetTag,
  newTag,
  error,
}: TagsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-[#171721]">Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={newTag}
            onChange={handleSetTag}
            onKeyDown={(e) =>
              e.key === 'Enter' && (e.preventDefault(), handleAddTag())
            }
            className="flex-1"
            placeholder="Add a tag (e.g. React, Remote, Senior)"
          />
          <Button
            type="button"
            onClick={handleAddTag}
            size="icon"
            variant="secondary"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-[#8083a3] hover:text-[#171721]"
                >
                  <XIcon className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {error ? (
          <span
            id={'error-description'}
            className="mt-1.5 block text-sm text-red-500"
          >
            {error}
          </span>
        ) : null}
      </CardContent>
    </Card>
  );
};
