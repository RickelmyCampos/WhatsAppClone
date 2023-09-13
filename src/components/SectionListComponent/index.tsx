import {ListRenderItem, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';

interface SectionProps<T = {}> {
  title: string;
  data: T[];
}

interface SectionListComponentProps<T = any> {
  section: SectionProps<T>[];
  renderSectionHeaderComponent?: (params: {
    title: string;
  }) => React.ReactElement | null | undefined;
  renderItem?: ListRenderItem<T> | null | undefined;
  refSection?: React.LegacyRef<FlatList<SectionProps<any>>> | undefined;
  refList?: React.LegacyRef<FlatList<SectionProps<any>>> | undefined;
  onContentSizeChange?: ((w: number, h: number) => void) | undefined
}

const SectionListComponent: React.FC<SectionListComponentProps> = ({
  section,
  renderSectionHeaderComponent,
  renderItem,
  refSection,
  refList,
  onContentSizeChange
}) => {
  return (
    <FlatList
      ref={refSection}
      
      onContentSizeChange={onContentSizeChange}
      data={section}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => (
        <FlatList
          ref={refList}
          data={item.data}
          ListHeaderComponent={() =>
            renderSectionHeaderComponent
              ? renderSectionHeaderComponent({title: item.title})
              : null
          }
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    />
  );
};

export default SectionListComponent;

const styles = StyleSheet.create({});
